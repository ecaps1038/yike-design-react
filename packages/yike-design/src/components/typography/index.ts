import Title from './Title';
import Text from './Text';
import Paragraph from './Paragraph';

interface TypographyType {
  Title: typeof Title;
  Text: typeof Text;
  Paragraph: typeof Paragraph;
}

const Typography: TypographyType = {
  Title,
  Text,
  Paragraph,
};

export { Typography };
