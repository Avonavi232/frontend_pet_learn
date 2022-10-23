import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  BuildEnv, BuildMode, BuildOptions, BuildPaths,
} from './config/build/types';

export const getBuildOptions = (env: BuildEnv): BuildOptions => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    locales: path.resolve(__dirname, 'public', 'locales'),
  };

  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  return {
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    hot: true,
  };
};

export default (env: BuildEnv) => {
  const buildOptions = getBuildOptions(env);

  const config: webpack.Configuration = buildWebpackConfig(buildOptions);

  return config;
};
