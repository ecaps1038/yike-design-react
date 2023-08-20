import path from 'node:path';

export const root = path.resolve(process.cwd());

export const svgDir = path.resolve(root, 'svg');

export const inlineSvgDir = path.resolve(root, 'inline-svg');

export const filledSvgDir = path.resolve(inlineSvgDir, 'filled');

export const outlinedSvgDir = path.resolve(inlineSvgDir, 'outlined');

export const sourceDir = path.resolve(root, 'src');

export const iconsDir = path.resolve(sourceDir, 'icons');

export const exportFile = path.resolve(iconsDir, 'index.ts');

export const entryFile = path.resolve(sourceDir, 'index.ts');

export const filledSourceDir = path.resolve(sourceDir, 'filled');

export const outlinedSourceDir = path.resolve(sourceDir, 'outlined');
