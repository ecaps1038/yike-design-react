import type React from 'react';
import { basename, extname, parse } from 'node:path';

import DemoAction from './DemoAction';
import type { FileRecord } from '@/types';
import { parseDemoAsset } from '@/utils/demo';
import DemoErrorBoundary from './DemoErrorBoundary';
import { COMPONENT_DEMOS_DIR } from '@/utils/constants';

interface DemoContainerProps {
  previewer: React.ReactNode;
  entry: string;
  inline?: string;
  source?: string;
}

const parseExternal = (entry: string) => {
  const parsed = parse(entry.replace(COMPONENT_DEMOS_DIR, ''));
  return [basename(parsed.dir), parsed.name] as [string, string];
};

const DemoContainer: React.FC<DemoContainerProps> = async ({ previewer, inline, entry, source }) => {
  try {
    const asset = await parseDemoAsset(entry, source);

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

    const external = !inline ? parseExternal(entry) : undefined;

    return (
      <div className="mt-3">
        <div className="border p-5 rounded-lg border-yike overflow-x-auto">
          <DemoErrorBoundary>{previewer}</DemoErrorBoundary>
        </div>
        <DemoAction
          files={files}
          external={external}
        />
      </div>
    );
  } catch (error) {
    return <div className="mt-3">{(error as Error).toString()}</div>;
  }
};

export default DemoContainer;
