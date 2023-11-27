import { Switch, Space } from '@yike-design/react';
import { useRef, useState } from 'react';

export default () => {
  const [value, setValue] = useState<number | boolean | string>('');
  const switchRef = useRef(null);
  const ChangeValue = (newValue: string | number | boolean) => {
    setValue(newValue);
  };
  return (
    <Space>
      <Switch ref={switchRef} onChange={ChangeValue} value checkedValue="on" uncheckedValue="off" />
      <span>当前值为: {value}</span>
    </Space>
  );
};
