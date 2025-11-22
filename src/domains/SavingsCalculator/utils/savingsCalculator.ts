const roundToThousand = (amount: number): number => {
  return Math.round(amount / 1000) * 1000;
};

export const calculateExpectedTotal = (monthlyAmount: number, term: number, annualRate: number): number => {
  const rateDecimal = annualRate / 100;
  const result = monthlyAmount * term * (1 + rateDecimal * 0.5);

  return roundToThousand(result);
};

export const calculateGapToGoal = (goalAmount: number, expectedAmount: number): number => {
  return goalAmount - expectedAmount;
};

export const calculateRecommendedMonthly = (goalAmount: number, term: number, annualRate: number): number => {
  const rateDecimal = annualRate / 100;
  const denominator = term * (1 + rateDecimal * 0.5);

  if (denominator === 0) {
    return 0;
  }

  const result = goalAmount / denominator;

  return roundToThousand(result);
};
