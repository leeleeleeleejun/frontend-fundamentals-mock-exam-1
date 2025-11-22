export const SAVINGS_RESULT_TABS = {
  products: '적금 상품',
  results: '계산 결과',
} as const;
export type SavingsResultTab = keyof typeof SAVINGS_RESULT_TABS;
export const SavingResultTabsList = Object.keys(SAVINGS_RESULT_TABS) as SavingsResultTab[];

export const AVAILABLE_TERMS_OPTION = [6, 12, 24] as const;
export type AvailableTermsOption = (typeof AVAILABLE_TERMS_OPTION)[number];
