import { createCssScope } from '../../utils';
import type { LinkProps } from './interface';

const Link: React.FC<LinkProps> = ({ className, children, disabled = false, href, ...restProps }) => {
  const bem = createCssScope('link');

  const link = disabled ? undefined : href;

  return (
    <a
      href={link}
      {...restProps}
      className={bem.join(bem({ disabled }), className)}
    >
      {children}
    </a>
  );
};

export default Link;
