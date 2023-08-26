import fs from 'node:fs';
import chalk from 'chalk';
import { glob } from 'glob';
import path from 'node:path';
import { rimraf } from 'rimraf';
import { consola } from 'consola';

import getDeclarations from './dts';
import { getTsconfig } from './utils';
import esbuildTransformer from './esbuild';
import type { BundlessConfig } from '../types';

interface TransformOptions {
  config: Required<BundlessConfig>;
  cwd: string;
}

function replacePathExt(filePath: string, ext: string) {
  const parsed = path.parse(filePath);

  return path.join(parsed.dir, `${parsed.name}${ext}`);
}

const transformFiles = async (files: string[], options: TransformOptions) => {
  const { config, cwd } = options;
  const { format, sourcemap, input, output } = config;

  const declarationFileMap = new Map<string, string>();

  const tsconfig = getTsconfig(cwd);

  consola.log(
    `Bundless for ${chalk.yellow(path.relative(cwd, input))} directory to ${chalk.yellow(
      path.relative(cwd, output)
    )} ${chalk.gray(`(${chalk.yellow(format)} format)`)}`
  );

  for (const file of files) {
    let fileDestPath = path.resolve(config.output, path.relative(config.input, file));
    const fileDestDir = path.dirname(fileDestPath);

    const declaration = /\.tsx?$/.test(file) && config.dts && tsconfig?.options.declaration;

    if (declaration) {
      declarationFileMap.set(file, fileDestDir);
    }

    if (!fs.existsSync(fileDestDir)) {
      fs.mkdirSync(fileDestDir, { recursive: true });
    }

    const result = await esbuildTransformer({
      file,
      outdir: fileDestDir,
      format,
      sourcemap,
      targets: config.targets,
    });

    if (result) {
      const { content, map, ext } = result;

      fileDestPath = replacePathExt(fileDestPath, ext);

      if (map) {
        fs.writeFileSync(`${fileDestPath}.map`, map);
      }
      fs.writeFileSync(fileDestPath, content);
    } else {
      // copy no transformed file
      fs.copyFileSync(file, fileDestPath);
    }

    consola.log(
      `Bundless ${chalk.gray(path.relative(cwd, file))} to ${chalk.gray(path.relative(cwd, fileDestPath))}${
        declaration ? ' (with declaration)' : ''
      }`
    );
  }

  if (declarationFileMap.size) {
    consola.log(`Generate declaration file${declarationFileMap.size > 1 ? 's' : ''}...`);

    const declarations = await getDeclarations([...declarationFileMap.keys()], cwd);

    declarations.forEach(item => {
      const fileDestDir = declarationFileMap.get(item.sourceFile);
      if (fileDestDir) {
        fs.writeFileSync(path.join(fileDestDir, path.basename(item.fileName)), item.content, 'utf-8');
      }
    });
  }

  return files.length;
};

const bundless = async (config: Required<BundlessConfig>) => {
  const { input, output } = config;

  await rimraf(output);

  const matches = await glob(`${input}/**/*.*`);

  const count = await transformFiles(matches, { config, cwd: process.cwd() });
  consola.log(`Transformed ${count} files`);
};

export default bundless;
