import { Space, Affix, Button } from '@yike-design/react';

export default () => {
  return (
    <Space direction="vertical">
      <Affix position="top" offset={100}>
        <Button>Affix top 100px</Button>
      </Affix>
      <Affix position="bottom" offset={100}>
        <Button>Affix bottom 100px</Button>
      </Affix>
    </Space>
  );
};
