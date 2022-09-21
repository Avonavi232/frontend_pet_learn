import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types';


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config
};
