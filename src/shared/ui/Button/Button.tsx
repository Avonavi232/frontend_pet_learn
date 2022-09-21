import cn from 'classnames';

import styles from './styles.sass';

export enum EButtonTheme {
  Clean = 'clean',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme
}

export const Button: React.FC<IButtonProps> = ({ className, theme = EButtonTheme.Clean, ...rest }) => {
  return (
    <button {...rest} className={cn(className, styles['container'], styles[theme])}/>
  );
};
