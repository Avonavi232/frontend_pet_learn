import webpack from 'webpack';
import { getResolvers } from './getResolvers';
import { getLoaders } from './getLoaders';
import { getPlugins } from './getPlugins';
import { BuildOptions } from './types';
import { getWebpackDevServer } from './getWebpackDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    resolve: getResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
      clean: true,
    },
    module: {
      rules: getLoaders(options),
    },
    plugins: getPlugins(options),
    devServer: isDev ? getWebpackDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  };
}
