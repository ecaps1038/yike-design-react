import type React from 'react';
import DemoAction from './DemoAction';
import { parseDemoAsset } from '@/utils/demo';
import type { FileRecord } from '@/types';
import { extname } from 'path';

interface DemoContainerProps {
  previewer: React.ReactNode;
  entry: string;
}

const DemoContainer: React.FC<DemoContainerProps> = async ({ previewer, entry }) => {
  try {
    const asset = await parseDemoAsset(entry);

    const files: FileRecord[] = [
      {
        filename: 'index' + extname(asset.filename),
        language: asset.language,
        source: asset.source,
        path: asset.path,
      },
      ...asset.dependencies
        .filter(item => item.type === 'file')
        .map(dep => ({
          filename: dep.filename,
          language: dep.language,
          source: dep.source,
          path: dep.path,
        })),
    ];

    return (
      <div className="mt-3">
        <div className="border p-5 rounded-lg border-yike overflow-x-auto">{previewer}</div>
        <DemoAction files={files} />
      </div>
    );
  } catch (error) {
    return <div className="mt-3">{(error as Error).toString()}</div>;
  }
};

export default DemoContainer;
