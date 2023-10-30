import React from 'react';

import AnchorLine from './AnchorLine';
import AnchorLink from './AnchorLink';
import { AnchorProvider } from './context';
import { createCssScope } from '../../utils';
import { getOffsetTop, scrollYTo } from './utils/scroll';
import { HASH_REGEXP, getAllLinks } from './utils/anchor';
import useUpdateEffect from '../_utils/hooks/useUpdateEffect';
import type { AnchorProps, YKAnchorContext } from './interface';

const renderAnchorList = (items?: AnchorProps['items']) => {
  if (items?.length) {
    return (
      <ul className="yk-anchor-list">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="yk-anchor-list-item">
            <AnchorLink href={item.href} title={item.title} />
            {renderAnchorList(item.children)}
          </li>
        ))}
      </ul>
    );
  }
};

const getDefaultContainer = () => window;

const Anchor: React.FC<AnchorProps> = props => {
  const {
    items,
    onClick,
    onChange,
    bounds = 5,
    offsetTop = 0,
    lineless = false,
    getContainer = getDefaultContainer,
  } = props;

  const bem = createCssScope('anchor');

  const anchorRef = React.useRef<HTMLDivElement>(null);

  // record current scroll status
  const scrollingRef = React.useRef<boolean>(false);

  const [activeLink, setActiveLink] = React.useState<string>();

  const [sliderTop, setSliderTop] = React.useState<number>();

  const links = React.useMemo(() => getAllLinks(items), [items]);

  const getCurrentAnchor = React.useCallback(() => {
    const allViewsAnchors: { link: string; top: number }[] = [];
    const container = getContainer();

    links.forEach(link => {
      if (HASH_REGEXP.test(link)) {
        const target = document.querySelector<HTMLElement>(link);
        if (target) {
          const offset = getOffsetTop(target, container);
          if (offset < bounds + offsetTop) {
            allViewsAnchors.push({ link, top: offset });
          }
        }
      }
    });
    // find last anchor
    if (allViewsAnchors.length) {
      return allViewsAnchors.reduce((max, item) => (item.top > max.top ? item : max)).link;
    }
  }, [links, getContainer, bounds, offsetTop]);

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
      const targetScrollTop = currentScrollTop + offset;
      scrollYTo(container, targetScrollTop).then(() => {
        scrollingRef.current = false;
      });
    },
    [getContainer]
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
      <div ref={anchorRef} className={bem()}>
        {renderAnchorLine()}
        {renderAnchorList(items)}
      </div>
    </AnchorProvider>
  );
};

export default Anchor;
