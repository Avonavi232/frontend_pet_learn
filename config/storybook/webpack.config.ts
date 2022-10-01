/* eslint-disable no-param-reassign */
import { Configuration } from 'webpack';
import { getBuildOptions } from '../../webpack.config';
import { getLoaders } from './getLoaders';
import { getResolvers } from './getResolvers';

export default ({ config }: {config: Configuration}) => {
  const buildOptions = getBuildOptions({ mode: 'development', port: NaN });

  if (config.resolve) {
    config.resolve = {
      ...config.resolve,
      ...getResolvers(buildOptions),
    };
  }

  if (config.module?.rules) {
    config.module.rules = config.module.rules.concat(getLoaders(buildOptions));
  }

  return config;
};
