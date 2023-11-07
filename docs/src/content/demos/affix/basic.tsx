import { Space, Affix, Button } from '@yike-design/react';

export default () => {
  return (
    <Space direction="vertical">
      <Affix position="top" offset={100}>
        <Button>top</Button>
      </Affix>
      <Affix position="bottom" offset={100}>
        <Button>bottom</Button>
      </Affix>
    </Space>
  );
};
