import { Switch, Space } from '@yike-design/react';
import { CloseOutlined, TickOutlined } from '@yike-design/react-icons';

export default () => {
  return (
    <Space>
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch checkedChildren={<TickOutlined />} unCheckedChildren={<CloseOutlined />} />
    </Space>
  );
};
