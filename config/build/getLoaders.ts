import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types';
import { getStylesLoader } from './getStylesLoader';

export const svgLoader: RuleSetRule = {
  test: /\.svg$/,
  use: [
    '@svgr/webpack',
    {
      loader: 'url-loader',
      options: {
        limit: 8192,
      },
    },
  ],
};

export function getLoaders(options: BuildOptions): RuleSetRule[] {
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        },
      },
    ],
  };

  const babelLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  };

  const stylesLoader = getStylesLoader(options);

  return [
    babelLoader,
    tsLoader,
    stylesLoader,
    svgLoader,
    fileLoader,
  ];
}
