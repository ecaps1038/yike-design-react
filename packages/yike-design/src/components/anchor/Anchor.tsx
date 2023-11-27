import clsx from 'clsx';
import React from 'react';

import AnchorLine from './AnchorLine';
import { AnchorProvider } from './context';
import { createCssScope } from '../../utils';
import { HASH_REGEXP, getAllLinks } from './utils/anchor';
import { getOffsetTop, scrollYTo } from '../_utils/scroll';
import useUpdateEffect from '../_utils/hooks/useUpdateEffect';
import type { AnchorProps, YKAnchorContext } from './interface';

const DEFAULT_GET_CONTAINER = () => window;

const Anchor: React.FC<React.PropsWithChildren<AnchorProps>> = props => {
  const {
    onClick,
    children,
    onChange,
    className,
    offsetTop = 0,
    targetOffset = 0,
    lineless = false,
    getContainer = DEFAULT_GET_CONTAINER,
  } = props;

  const bem = createCssScope('anchor');

  const anchorRef = React.useRef<HTMLDivElement>(null);

  // record current scroll status
  const scrollingRef = React.useRef<boolean>(false);

  const [activeLink, setActiveLink] = React.useState<string>();

  const [sliderTop, setSliderTop] = React.useState<number>();

  const links = React.useMemo(() => getAllLinks(children), [children]);

  const getCurrentAnchor = React.useCallback(() => {
    const allViewsAnchors: { link: string; top: number }[] = [];
    const container = getContainer();

    links.forEach(link => {
      if (HASH_REGEXP.test(link)) {
        const target = document.querySelector<HTMLElement>(link);
        if (target) {
          const offset = getOffsetTop(target, container);
          if (offset <= offsetTop + targetOffset) {
            allViewsAnchors.push({ link, top: offset });
          }
        }
      }
    });
    // find last anchor
    if (allViewsAnchors.length) {
      return allViewsAnchors.reduce((max, item) => (item.top > max.top ? item : max)).link;
    }
  }, [links, getContainer, offsetTop, targetOffset]);

  // TODO: add debounce
  const handleScroll = React.useCallback(() => {
    if (scrollingRef.current) {
      return;
    }
    const current = getCurrentAnchor();
    setActiveLink(current);
  }, [getCurrentAnchor]);

  const updateSlider = React.useCallback(() => {
    if (!activeLink) {
      setSliderTop(undefined);
      return;
    }
    const anchorWrapper = anchorRef.current;
    const anchorActiveLink = anchorWrapper?.querySelector<HTMLElement>('.yk-anchor-link--active');
    if (anchorWrapper && anchorActiveLink) {
      const offset = getOffsetTop(anchorActiveLink, anchorWrapper);
      setSliderTop(offset + 7);
    }
  }, [activeLink]);

  const scrollTo = React.useCallback(
    (link: string) => {
      setActiveLink(link);
      if (!HASH_REGEXP.test(link)) {
        return;
      }
      scrollingRef.current = true;
      // container scroll
      const target = document.querySelector<HTMLElement>(link);
      if (!target) {
        return;
      }
      const container = getContainer();

      const offset = getOffsetTop(target, container);
      const currentScrollTop = container === window ? window.scrollY : (container as HTMLElement).scrollTop;
      const targetScrollTop = currentScrollTop + offset - targetOffset;
      scrollYTo(container, targetScrollTop).then(() => {
        scrollingRef.current = false;
      });
    },
    [getContainer, targetOffset]
  );

  React.useEffect(() => {
    const container = getContainer();

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [getContainer, handleScroll]);

  React.useEffect(() => {
    if (!lineless) {
      updateSlider();
    }
  }, [lineless, updateSlider]);

  // init when url has hash
  React.useEffect(() => {
    if (location.hash) {
      // fix when hash is Chinese
      const link = decodeURIComponent(location.hash);
      if (links.includes(link)) {
        scrollTo(link);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUpdateEffect(() => {
    activeLink && onChange?.(activeLink);
  }, [activeLink]);

  const renderAnchorLine = () => {
    if (!lineless) {
      return <AnchorLine top={sliderTop} />;
    }
  };

  const contextValue: YKAnchorContext = React.useMemo(
    () => ({
      onClick,
      scrollTo,
      activeLink,
    }),
    [onClick, scrollTo, activeLink]
  );

  return (
    <AnchorProvider value={contextValue}>
      <div ref={anchorRef} className={clsx(bem(), className)}>
        {renderAnchorLine()}
        {children && <ul className="yk-anchor-list">{children}</ul>}
      </div>
    </AnchorProvider>
  );
};

export default Anchor;
