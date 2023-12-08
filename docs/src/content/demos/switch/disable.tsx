import React from 'react';
import { Button, Space, Switch } from '@yike-design/react';

export default () => {
  const [disabled, setDisabled] = React.useState(true);
  return (
    <Space direction="vertical">
      <Switch disabled={disabled} />
      <Button onClick={() => setDisabled(!disabled)}>Toggle disabled</Button>
    </Space>
  );
};
