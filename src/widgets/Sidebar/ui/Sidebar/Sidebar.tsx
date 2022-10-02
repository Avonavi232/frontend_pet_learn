import cn from 'classnames';

import { FC, useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { IconButton } from 'shared/ui/IconButton';
import styles from './styles.sass';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = () => setOpen((p) => !p);

  return (
    <div className={cn(className, styles.container, { [styles.open]: isOpen })}>
      <IconButton onClick={onToggle} />
      <LangSwitcher />
    </div>
  );
};
