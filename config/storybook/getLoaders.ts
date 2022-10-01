import { BuildOptions } from '../build/types';
import { getStylesLoader } from '../build/getStylesLoader';
import { svgLoader } from '../build/getLoaders';

export const getLoaders = (buildOptions: BuildOptions) => {
  const stylesLoader = getStylesLoader(buildOptions);

  return [
    stylesLoader,
    svgLoader,
  ];
};
