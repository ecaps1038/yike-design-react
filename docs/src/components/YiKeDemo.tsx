import type React from 'react';
import { readFileSync } from 'fs';

import DemoCode from './DemoCode';
import Previewer from './Previewer';

let style = '';
try {
  // raw loader work error so use fs to read file
  style = readFileSync(process.env.YIKE_STYLE_PATH!, 'utf-8');
} catch (error) {
  console.error(error);
}

interface YiKeDemoProps {
  lang: string;
  id: string;
  code: string;
}

const YiKeDemo: React.FC<YiKeDemoProps> = async ({ lang, code, id }) => {
  const matched = /language-(\w+)/.exec(lang || '')?.[1];
  const language = matched?.replace(/react/, 'jsx') ?? 'javascript';

  const { default: Demo } = await import(`yike/${id}`);

  return (
    <div className="mt-3">
      <Previewer
        style={style}
        component={<Demo />}
      />
      <DemoCode
        lang={language}
        code={code}
      />
    </div>
  );
};

export default YiKeDemo;
