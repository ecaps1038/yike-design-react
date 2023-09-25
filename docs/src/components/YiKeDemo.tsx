import type React from 'react';
import DemoContainer from './demo/DemoContainer';

interface YiKeDemoProps {
  entry: string;
  inline?: string;
  source?: string;
  previewer: React.ReactNode;
}

const YiKeDemo: React.FC<YiKeDemoProps> = props => {
  return <DemoContainer {...props} />;
};

export default YiKeDemo;
