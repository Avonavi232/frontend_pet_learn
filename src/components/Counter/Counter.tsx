import { FC, useCallback, useState } from 'react';
import styles from './styles.sass';
import { Button } from '../Button';

export const Counter: FC = () => {
  const [val, setVal] = useState(0);

  const handleClick = useCallback(() => setVal((v) => v + 1), []);

  return (
    <div>
      <h2 className={styles.value}>{val}</h2>
      <Button onClick={handleClick}>inc</Button>
    </div>
  );
};
