/* eslint-disable react/jsx-props-no-spreading */
import type {
  ComponentPropsWithRef, CSSProperties, FC, SVGProps,
} from 'react';
import cn from 'classnames';

import { TIconSize, TColors } from 'shared/ui/theme/types';
import styles from './styles.sass';

export interface IIconProps extends ComponentPropsWithRef<'svg'> {
  className?: string;
  size?: TIconSize;
  color?: TColors
  display?: CSSProperties['display']
}

const mapIconSize: Record<TIconSize, number> = {
  S: 12,
  M: 16,
  L: 24,
  XL: 32,
};

const getIconSize = (size: TIconSize): SVGProps<SVGSVGElement> => {
  const sizeValue = mapIconSize[size];

  return {
    width: `${sizeValue}px`,
    height: `${sizeValue}px`,
  };
};

const getIconColor = (color: TColors): SVGProps<SVGSVGElement> => ({
  fill: `var(--color-${color})`,
});

export const createIcon = (IconComponent: FC<SVGProps<SVGSVGElement>>): FC<IIconProps> => {
  const Icon: FC<IIconProps> = (props) => {
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
  };

  return Icon;
};