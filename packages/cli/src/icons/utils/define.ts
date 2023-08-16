import path from 'node:path';

export const root = path.resolve(process.cwd());

export const svgDir = path.resolve(root, 'svg');

export const inlineSvgDir = path.resolve(root, 'inline-svg');

export const filledSvgDir = path.resolve(inlineSvgDir, 'filled');

export const outlinedSvgDir = path.resolve(inlineSvgDir, 'outlined');
