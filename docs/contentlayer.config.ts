import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/*/*.md(x)?`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: false },
    description: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => `${doc._raw.flattenedPath.split('/')[2]}`,
    },
    dir: {
      type: 'string',
      resolve: doc => `${doc._raw.sourceFileDir.split('/')[1]}`,
    },
    path: {
      type: 'string',
      resolve: doc => doc._raw.sourceFilePath,
    },
  },
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Doc],
});
