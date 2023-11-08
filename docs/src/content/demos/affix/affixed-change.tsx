import { Affix, Button } from '@yike-design/react';

const App: React.FC = () => (
  // TODO: change console.log to message [wait for message component]
  // eslint-disable-next-line no-console
  <Affix offset={150} onChange={affixed => console.log(affixed)}>
    <Button>Affixed top 150px</Button>
  </Affix>
);

export default App;
