import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import { BuildOptions } from './types';

export function getLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader: RuleSetRule = {
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

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const babelLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [],
        plugins: [
          ['i18next-extract', {
            nsSeparator: '~',
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
          }],
        ],
      },
    },
  };

  const stylesLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => !resourcePath.includes('.global.'),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [
    babelLoader,
    tsLoader,
    stylesLoader,
    svgLoader,
    fileLoader,
  ];
}
