import path from 'node:path';

export const root = path.resolve(process.cwd());

export const svgDir = path.resolve(root, 'svg');

export const sourceDir = path.resolve(root, 'src');

export const iconsDir = path.resolve(sourceDir, 'icons');

export const exportFile = path.resolve(iconsDir, 'index.ts');

export const entryFile = path.resolve(sourceDir, 'index.ts');

export const FILE_AUTO_GENERATE_COMMENT = `
/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */
`;
