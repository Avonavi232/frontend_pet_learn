import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const getWebpackDevServer = (options: BuildOptions): DevServerConfig => {
  const { port } = options;

  return {
    port,
    open: false,
    static: {
      directory: options.paths.locales,
      publicPath: '/locales',
    },
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    hot: options.hot,
    liveReload: false,
  };
};
