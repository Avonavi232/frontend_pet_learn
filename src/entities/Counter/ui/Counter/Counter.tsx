import type { FC } from 'react';
import cn from 'classnames';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounterValue } from '../../model/selectors';
import { counterActions } from '../../model/slice';

interface ICounterProps {
  className?: string;
}

export const Counter: FC<ICounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  const inc = () => {
    dispatch(counterActions.increment());
  };

  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>
        counterValue:
        {counterValue}
      </h1>
      <Button onClick={inc}>Inc</Button>
      <Button onClick={dec}>Dec</Button>
    </div>
  );
};
