import { SavingsFilters } from '../type.ts';
import { SavingsProduct } from '../apis/schemas/savingsProduct.ts';

export const isEligibleProduct = (selection: SavingsFilters, product: SavingsProduct) => {
  const isValidAmount =
    selection.monthlyAmount >= product.minMonthlyAmount && selection.monthlyAmount <= product.maxMonthlyAmount;
  const hasMatchingTerm = selection.availableTerms === product.availableTerms;

  return isValidAmount && hasMatchingTerm;
};
