import DemoCode from './DemoCode';
import CodeLive from './code-demo/CodeLive';

interface YiKeDemoProps {
  lang: string;
  code: string;
  error?: string;
  liveCode: string;
}

const YiKeDemo = ({ lang, code, liveCode, error }: YiKeDemoProps) => {
  return (
    <div className="mt-3">
      <div className="border p-5 rounded-lg border-yike">
        {error ? <pre>{error}</pre> : <CodeLive code={liveCode} />}
      </div>
      <DemoCode
        code={code}
        lang={lang}
      />
    </div>
  );
};

export default YiKeDemo;
