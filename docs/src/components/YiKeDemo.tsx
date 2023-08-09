import DemoCode from './DemoCode';
import Previewer from './Previewer';

interface YiKeDemoProps {
  lang: string;
  path: string;
  code: string;
}

const YiKeDemo = async ({ lang, code, path }: YiKeDemoProps) => {
  const { default: Demo } = await import(`@yike-demo/${normalizePath(path)}`);

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

// simple normalize path for windows
function normalizePath(path: string) {
  return path.replaceAll('\\', '/');
}
