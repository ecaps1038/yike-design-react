import type React from 'react';
import CodeDemo from './CodeDemo';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

interface ExternalDemoProps {
  src?: string;
  devOnly?: boolean;
}

const ExternalDemo: React.FC<ExternalDemoProps> = async ({ src, devOnly = false }) => {
  if (devOnly && process.env.NODE_ENV === 'production') return null;

  let error: Error | null = null;
  let code = '';
  if (!src) {
    error = new Error('src is required');
  } else if (!src.startsWith('/examples')) {
    error = new Error('src should start with /examples');
  } else {
    try {
      const path = resolve(process.cwd(), 'src/app/(example)', src.slice(1), 'page.tsx');
      const originCode = await readFile(path, 'utf-8');
      if (originCode.split('\n')[0].includes('use client')) {
        code = originCode.split('\n').slice(1).join('\n');
      } else {
        code = originCode;
      }
    } catch (err) {
      error = new Error(`src ${src} not found`, { cause: err });
    }
  }

  return (
    <CodeDemo
      lang="tsx"
      code={code}
      previewer={error ? <pre>{error.toString()}</pre> : <iframe src={src} />}
    />
  );
};

export default ExternalDemo;
