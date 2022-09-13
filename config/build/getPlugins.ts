import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildPaths } from './types';

export type Options = {
  htmlTemplatePath: string;
}

export function getPlugins({html}: BuildPaths): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
  ];
}

