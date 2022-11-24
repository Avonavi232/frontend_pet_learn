import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select';
import { ECurrency } from '../model/types';

export interface ICurrencySelectorProps {
  className?: string;
  value?: ECurrency
  onChange?(value: ECurrency): void
  isReadonly?: boolean;
}

const CURRENCY_OPTIONS = [
  { value: ECurrency.Eur, label: '€' },
  { value: ECurrency.Usd, label: '$' },
  { value: ECurrency.Rub, label: '₽' },
];

export const CurrencySelector: React.VFC<ICurrencySelectorProps> = (props) => {
  const { t } = useTranslation();
  const {
    onChange, value, className, isReadonly,
  } = props;

  return (
    <Select
      label={t('select_currency_label')}
      options={CURRENCY_OPTIONS}
      className={className}
      value={value}
      onChange={onChange}
      isReadonly={isReadonly}
    />
  );
};
