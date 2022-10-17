import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types';

export function getPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const isAnalyze = Boolean(process.env.analyze);

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new ForkTsCheckerWebpackPlugin(),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[];
}
