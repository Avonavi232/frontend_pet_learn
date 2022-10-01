import { BuildOptions } from '../build/types';
import { getStylesLoader } from '../build/getStylesLoader';

export const getLoaders = (buildOptions: BuildOptions) => {
  const stylesLoader = getStylesLoader(buildOptions);

  return [
    stylesLoader,
  ];
};
