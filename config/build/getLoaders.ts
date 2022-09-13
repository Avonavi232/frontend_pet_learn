import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export function getLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  let tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
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
          }
        }
      },
      "sass-loader",
    ],
  };

  return [
    tsLoader,
    stylesLoader,
  ];
}
