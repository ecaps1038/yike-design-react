'use client';
import React, { useRef, useState } from 'react';
import useIsomorphicLayoutEffect from '../_utils/hooks/useIsomorphicLayoutEffect';

const isTextNode = (node: React.ReactNode): node is string | number => {
  return typeof node === 'string' || typeof node === 'number';
};

const getNodesLength = (nodes: React.ReactNode[]) => {
  return nodes.reduce<number>((currentLen, node) => {
    return currentLen + (isTextNode(node) ? node.toString().length : 1);
  }, 0);
};

const sliceNodes = (nodes: React.ReactNode[], sliceLen: number, total: number) => {
  const result: React.ReactNode[] = [];
  if (sliceLen >= total) {
    return nodes;
  }
  let currentLen = 0;
  for (let i = 0; i < nodes.length; i++) {
    if (currentLen >= sliceLen) {
      return result;
    }
    const node = nodes[i];

    if (isTextNode(node)) {
      const currentNodeText = String(node);
      const currentNodeLen = currentNodeText.length;
      if (currentNodeLen > sliceLen - currentLen) {
        result.push(currentNodeText.slice(0, sliceLen - currentLen));
        currentLen = sliceLen;
        return result;
      }
      result.push(node);
      currentLen += currentNodeLen;
    } else {
      result.push(node);
      currentLen += 1;
    }
  }
  return result;
};

enum MEASURE_STATE {
  UNMEASURED,
  INIT,
  MEASURING,
  MEASURE_END,
  NO_NEED_ELLIPSIS,
}

const basicStyle: React.CSSProperties = {
  zIndex: -999,
  position: 'fixed',
  opacity: 0,
  padding: 0,
  margin: 0,
};

interface EllipsisProps {
  rows: number;
  width: number;
  text: React.ReactNode;
  renderMeasureNode: (node: React.ReactNode) => React.ReactNode;

  onExpand?: (expand: boolean) => void;
  onEllipsis?: (ellipsis: boolean) => void;
}

// js ellipsis
const Ellipsis: React.FC<EllipsisProps> = props => {
  const { rows, text, width, renderMeasureNode } = props;

  const nodeList = React.useMemo(() => React.Children.toArray([text]), [text]);

  const totalLen = React.useMemo(() => getNodesLength(nodeList), [nodeList]);

  const [binarySearchIndex, setBinarySearchIndex] = useState([0, 0, 0]);

  const singleRef = useRef<HTMLDivElement>(null);

  const mirrorRef = useRef<HTMLDivElement>(null);

  const [lineHeight, setLineHeight] = useState(0);

  const [start, mid, end] = binarySearchIndex;

  // measure state
  const [state, setState] = useState(MEASURE_STATE.UNMEASURED);

  useIsomorphicLayoutEffect(() => {
    if (singleRef.current) {
      setLineHeight(singleRef.current.clientHeight);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (width) {
      setBinarySearchIndex([0, totalLen, totalLen]);
      setState(MEASURE_STATE.INIT);
    }
  }, [width]);

  useIsomorphicLayoutEffect(() => {
    if (lineHeight && mirrorRef.current) {
      const maxHeight = rows * lineHeight;
      const mirrorHeight = mirrorRef.current.offsetHeight;

      if (state === MEASURE_STATE.INIT && mirrorHeight <= maxHeight) {
        setState(MEASURE_STATE.NO_NEED_ELLIPSIS);
      } else if (state === MEASURE_STATE.INIT) {
        setState(MEASURE_STATE.MEASURING);
      }

      if (state === MEASURE_STATE.MEASURING) {
        if (start !== end - 1) {
          let nextStart = start;
          let nextEnd = end;
          if (mirrorHeight > maxHeight) {
            nextEnd = mid;
          } else if (mirrorHeight <= maxHeight) {
            nextStart = mid;
          }
          const nextMid = Math.floor((nextStart + nextEnd) / 2);
          setBinarySearchIndex([nextStart, nextMid, nextEnd]);
        } else {
          setBinarySearchIndex([start, start, start]);
          setState(MEASURE_STATE.MEASURE_END);
        }
      }
    }
  }, [lineHeight, rows, start, mid, end, state]);

  const singleNode = React.useMemo(
    () => (
      <div
        ref={singleRef}
        style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap', ...basicStyle }}
      >
        lg
      </div>
    ),
    []
  );

  const ellipsisNode = React.useMemo(() => {
    return state === MEASURE_STATE.NO_NEED_ELLIPSIS ? text : renderMeasureNode(sliceNodes(nodeList, mid, totalLen));
  }, [state, text, nodeList, mid, totalLen, renderMeasureNode]);

  const mirrorNode = React.useMemo(
    () => (
      <div
        ref={mirrorRef}
        style={{ width, ...basicStyle }}
      >
        {ellipsisNode}
      </div>
    ),
    [ellipsisNode, width]
  );

  return (
    <React.Fragment>
      {state === MEASURE_STATE.UNMEASURED && singleNode}
      {[MEASURE_STATE.MEASURE_END, MEASURE_STATE.NO_NEED_ELLIPSIS].includes(state) ? ellipsisNode : mirrorNode}
    </React.Fragment>
  );
};

export default Ellipsis;
