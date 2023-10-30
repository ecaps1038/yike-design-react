import { Space, Button } from '@yike-design/react';

export default () => {
  return (
    <Space>
      <Button loading>加载中</Button>
      <Button loading type="secondary">
        加载中
      </Button>
      <Button loading type="outline">
        加载中
      </Button>
    </Space>
  );
};
