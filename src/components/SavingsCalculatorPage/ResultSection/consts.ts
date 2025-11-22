export const SAVINGS_RESULT_TABS = {
  products: '적금 상품',
  results: '계산 결과',
} as const;
export type SavingsResultTab = keyof typeof SAVINGS_RESULT_TABS;
export const SavingResultTabsList = Object.keys(SAVINGS_RESULT_TABS) as SavingsResultTab[];
