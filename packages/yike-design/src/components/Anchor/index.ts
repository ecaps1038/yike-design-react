import './style/index.scss';
import InternalAnchor from './Anchor';
import AnchorLink from './AnchorLink';

type InternalAnchorType = typeof InternalAnchor;

type CompoundedComponent = InternalAnchorType & {
  Link: typeof AnchorLink;
};

const Anchor = InternalAnchor as CompoundedComponent;

Anchor.Link = AnchorLink;

export { Anchor };
