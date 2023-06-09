import path from 'path';
import { compilerOptions } from '../../tsconfig.json';

const paths: Record<string, string[]> = compilerOptions?.paths ?? {};

export const generateAlias = (dirname: string) => {
  return Object.keys(paths).reduce<Record<string, string>>((prev, key) => {
    prev[key.replace(/(\/+\*)$/, '')] = path.resolve(dirname, paths?.[key]?.[0]?.replace(/(\/+\*)$/, ''));

    return prev;
  }, {});
};
