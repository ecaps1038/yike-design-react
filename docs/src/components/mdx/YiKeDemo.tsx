import type React from 'react';
import DemoContainer from '@/components/demo/DemoContainer';

interface YiKeDemoProps {
  entry: string;
  inline?: string;
  source?: string;
  iframe: boolean;
}

const YiKeDemo: React.FC<YiKeDemoProps> = props => {
  return <DemoContainer {...props} />;
};

export default YiKeDemo;
