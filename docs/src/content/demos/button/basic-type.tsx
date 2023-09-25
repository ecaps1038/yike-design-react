import { Button, Space } from '@yike-design/react';

export default () => {
  return (
    <Space>
      <Button onClick={() => console.log('xxx')}>主要按钮s</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="outline">线框按钮</Button>
    </Space>
  );
};
