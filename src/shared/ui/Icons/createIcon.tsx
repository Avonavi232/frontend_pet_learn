/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import type {
  ComponentPropsWithRef, CSSProperties, FC, SVGProps,
} from 'react';
import cn from 'classnames';

import { TStandardSize, TColors } from 'shared/ui/theme/types';
import styles from './styles.sass';

export interface IIconProps extends ComponentPropsWithRef<'svg'> {
  className?: string;
  size?: TStandardSize;
  color?: TColors
  display?: CSSProperties['display']
}

const mapIconSize: Record<TStandardSize, number> = {
  XS: 8,
  S: 12,
  M: 16,
  L: 24,
  XL: 32,
};

const getIconSize = (size: TStandardSize): SVGProps<SVGSVGElement> => {
  const sizeValue = mapIconSize[size];

  return {
    width: `${sizeValue}px`,
    height: `${sizeValue}px`,
  };
};

const getIconColor = (color: TColors): SVGProps<SVGSVGElement> => ({
  fill: `var(--color-${color})`,
});

export const createIcon = (IconComponent: FC<SVGProps<SVGSVGElement>>): FC<IIconProps> => memo<IIconProps>((props) => {
  const {
    className,
    size = 'M',
    color = 'text-on-p',
    display = 'block',
    ...rest
  } = props;

  const iconSize = getIconSize(size);
  const iconColor = getIconColor(color);

  return (
    <IconComponent
      {...rest}
      className={cn(styles[`display_${display}`], className)}
      {...iconSize}
      {...iconColor}
    />
  );
});
