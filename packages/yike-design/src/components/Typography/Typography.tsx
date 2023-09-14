import Title from './Title';
import Text from './Text';
import Paragraph from './Paragraph';

interface TypegraphyType {
  Title: typeof Title;
  Text: typeof Text;
  Paragraph: typeof Paragraph;
}

const Typegraphy: TypegraphyType = {
  Title,
  Text,
  Paragraph,
};

export default Typegraphy;
