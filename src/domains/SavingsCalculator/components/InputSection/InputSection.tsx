import type { ChangeEvent } from 'react';
import { Spacing } from 'tosslib';
import type { SavingsFilters, SavingsFiltersKey } from '@/domains/SavingsCalculator/type.ts';
import { formatCurrency } from '@/utils/formatCurrency.ts';
import { GoalAmount } from './GoalAmount.tsx';
import { MonthlyAmount } from './MonthlyAmount.tsx';
import { AvailableTerms } from './AvailableTerms.tsx';

type Props = {
  filters: SavingsFilters;
  handleSetFilters: (field: SavingsFiltersKey, newValue: number) => void;
};

export const InputSection = ({ filters, handleSetFilters }: Props) => {
  const validateNumber = (field: SavingsFiltersKey, event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value.replace(/,/g, ''));

    if (isNaN(newValue)) {
      return;
    }
    handleSetFilters(field, newValue);
  };

  return (
    <>
      <GoalAmount
        value={formatCurrency(filters.goalAmount)}
        onChange={event => {
          validateNumber('goalAmount', event);
        }}
      />
      <Spacing size={16} />
      <MonthlyAmount
        value={formatCurrency(filters.monthlyAmount)}
        onChange={event => {
          validateNumber('monthlyAmount', event);
        }}
      />
      <Spacing size={16} />
      <AvailableTerms
        value={filters.availableTerms}
        onChange={value => {
          handleSetFilters('availableTerms', value);
        }}
      />
    </>
  );
};
