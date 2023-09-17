import DemoCode from './doc-demo/DemoCode';
import Previewer from './doc-demo/Previewer';

interface YiKeDemoProps {
  lang: string;
  code: string;
  error?: string;
  liveCode: string;
}

const YiKeDemo = ({ lang, code, liveCode, error }: YiKeDemoProps) => {
  return (
    <div className="mt-3">
      <div className="border p-5 rounded-lg border-yike overflow-x-auto">
        <Previewer
          error={error}
          code={liveCode}
        />
      </div>
      <DemoCode
        code={code}
        lang={lang}
      />
    </div>
  );
};

export default YiKeDemo;
