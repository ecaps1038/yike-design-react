import { createCssScope } from '../../utils';

interface AnchorLineProps {
  top?: number;
}

const AnchorLine: React.FC<AnchorLineProps> = ({ top }) => {
  const bem = createCssScope('anchor-line');
  return (
    <div className={bem()}>
      <span
        style={{ top }}
        className={bem('slider')}
      />
    </div>
  );
};

export default AnchorLine;
