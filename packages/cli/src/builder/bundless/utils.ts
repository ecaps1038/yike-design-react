import ts from 'typescript';
import path from 'node:path';

export function getTsconfig(cwd: string) {
  const tsconfigPath = ts.findConfigFile(cwd, ts.sys.fileExists);

  if (tsconfigPath) {
    const tsconfigFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    return ts.parseJsonConfigFileContent(tsconfigFile.config, ts.sys, path.dirname(tsconfigPath));
  }
}
