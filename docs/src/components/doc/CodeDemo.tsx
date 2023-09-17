import DemoCode from './doc-demo/DemoCode';

interface CodeDemoProps {
  lang: string;
  code: string;
  previewer: React.ReactNode;
}

const CodeDemo = ({ lang, code, previewer }: CodeDemoProps) => {
  return (
    <div className="mt-3">
      <div className="border p-5 rounded-lg border-yike overflow-x-auto">{previewer}</div>
      <DemoCode
        code={code}
        lang={lang}
      />
    </div>
  );
};

export default CodeDemo;
