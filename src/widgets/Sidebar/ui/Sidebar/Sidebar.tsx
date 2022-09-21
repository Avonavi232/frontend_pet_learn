import cn from 'classnames';

import styles from './styles.sass';
import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [ isOpen, setOpen ] = useState(false)

  const onToggle = () => setOpen(p => !p)

  return (
    <div className={cn(className, styles['container'], { [styles['open']]: isOpen })}>
      <button onClick={onToggle}>toggle</button>
      <LangSwitcher/>
    </div>
  );
};
