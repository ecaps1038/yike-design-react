import type Vinyl from 'vinyl';
import through2 from 'through2';
import path from 'node:path';

export type FlattenImportUrlOptions = { dirname: string };

export const flattenImportUrl = (
  options: FlattenImportUrlOptions = {
    dirname: 'components',
  }
) => {
  const { dirname } = options;
  return through2.obj(function (file: Vinyl, _, nextCallback) {
    if (file.isNull()) {
      return nextCallback();
    }

    let fileContent = file.contents!.toString();

    if (file.path.indexOf('index') !== -1) {
      // process src/index.ts
      fileContent = fileContent.replace(/["'].*?(components\/).*?;?/g, (importUrl, text) => {
        return importUrl.replace(text, '');
      });
      file.contents = Buffer.from(fileContent);
    }

    if (file.path.indexOf(dirname) === -1) {
      return nextCallback(null, file);
    }

    fileContent = fileContent.replace(/(\.\.[/\\\\]).*?(hooks|styles|utils).*?["']/g, importUrl => {
      return importUrl.slice(3);
    });
    file.contents = Buffer.from(fileContent);
    file.path = file.path.replace(`${dirname}${path.sep}`, '');
    nextCallback(null, file);
  });
};
