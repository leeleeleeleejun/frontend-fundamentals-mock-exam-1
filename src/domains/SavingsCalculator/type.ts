import { AvailableTermsOption } from './constants.ts';

export type SavingsFilters = {
  monthlyAmount: number;
  goalAmount: number;
  availableTerms: AvailableTermsOption;
};

export type SavingsFiltersKey = keyof SavingsFilters;
