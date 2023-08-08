import type React from 'react';

import DemoCode from './DemoCode';
import Previewer from './Previewer';

interface YiKeDemoProps {
  lang: string;
  path: string;
  code: string;
}

const YiKeDemo: React.FC<YiKeDemoProps> = async ({ lang, code, path }) => {
  const { default: Demo } = await import(`@yike-demo/${path}`);

  return (
    <div className="mt-3">
      <Previewer component={<Demo />} />
      <DemoCode
        code={code}
        lang={lang}
      />
    </div>
  );
};

export default YiKeDemo;
