import type React from 'react';
import assert from 'node:assert';
import { basename, dirname, extname } from 'node:path';

import type { FileRecord } from '@/types';
import { parseDemoAsset } from '@/utils/demo';
import ErrorContainer from './ErrorContainer';
import PreviewerAction from './PreviewerAction';
import PreviewerContainer from './PreviewerContainer';

interface DemoContainerProps {
  previewer: React.ReactNode;
  entry: string;
  inline?: string;
  source?: string;
}

const DemoContainer: React.FC<DemoContainerProps> = async ({ inline, entry, source }) => {
  try {
    if (!inline) {
      assert(entry.startsWith('~demos/'), 'External demo must be in ~demos directory');
    }

    const [component, demo] = inline
      ? [basename(entry, extname(entry)), inline]
      : [basename(dirname(entry)), basename(entry, extname(entry))];

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

    const singleLink = [inline ? 'demos/inline' : 'demos', component, demo].join('/');

    return (
      <div className="mt-3">
        <div className="border p-5 rounded-lg border-yike-1 overflow-x-auto">
          <PreviewerContainer
            inline={!!inline}
            demo={demo}
            component={component}
          />
        </div>
        <PreviewerAction
          files={files}
          singleLink={singleLink}
        />
      </div>
    );
  } catch (error) {
    return (
      <div className="mt-3">
        <div className="border p-5 rounded-lg border-yike-1 overflow-x-auto">
          <ErrorContainer error={error as Error} />
        </div>
      </div>
    );
  }
};

export default DemoContainer;
