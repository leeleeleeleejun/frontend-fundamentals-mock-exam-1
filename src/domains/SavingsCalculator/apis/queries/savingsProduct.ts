import { queryOptions } from '@tanstack/react-query';
import { getSavingsProducts } from '../services/savingsProduct.ts';

export const SavingsProductQueryKeys = {
  all: () => ['savingProducts'] as const,
  list: () => [...SavingsProductQueryKeys.all(), 'list'] as const,
};

export const useSavingsProductQueries = {
  list: () =>
    queryOptions({
      queryKey: SavingsProductQueryKeys.list(),
      queryFn: getSavingsProducts,
    }),
};
