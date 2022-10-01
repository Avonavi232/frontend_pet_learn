import { ResolveOptions } from 'webpack';
import { BuildOptions } from '../build/types';

export function getResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '...'],
    modules: [options.paths.src, 'node_modules'],
  };
}
