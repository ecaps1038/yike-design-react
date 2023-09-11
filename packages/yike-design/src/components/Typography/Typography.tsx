import Title from './Title';

interface TypegraphyType {
  Title: typeof Title;
}

const Typegraphy: TypegraphyType = {
  Title,
};

export default Typegraphy;
