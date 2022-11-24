import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select';
import { ECountry } from '../model/types';

export interface ICountrySelectorProps {
  className?: string;
  value?: ECountry
  onChange?(value: ECountry): void
  isReadonly?: boolean;
}

const COUNTRY_OPTIONS = [
  { value: ECountry.Georgia, label: 'Georgia' },
  { value: ECountry.Belarus, label: 'Belarus' },
  { value: ECountry.Russia, label: 'Russia' },
  { value: ECountry.Ukraine, label: 'Ukraine' },
];

export const CountrySelector: React.VFC<ICountrySelectorProps> = (props) => {
  const { t } = useTranslation();
  const {
    onChange, value, className, isReadonly,
  } = props;

  return (
    <Select
      label={t('select_country_label')}
      options={COUNTRY_OPTIONS}
      className={className}
      value={value}
      onChange={onChange}
      isReadonly={isReadonly}
    />
  );
};
