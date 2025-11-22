import { colors, ListRow } from 'tosslib';
import type { SavingsProduct } from '../../apis/schemas/savingsProduct.ts';
import {
  calculateExpectedTotal,
  calculateGapToGoal,
  calculateRecommendedMonthly,
} from '../../utils/savingsCalculator.ts';
import { formatCurrency } from '@/utils/formatCurrency.ts';

type Props = {
  selectedProduct: SavingsProduct | undefined;
  monthlyAmount: number;
  goalAmount: number;
};

export const SimulationResult = ({ selectedProduct, monthlyAmount, goalAmount }: Props) => {
  if (!selectedProduct) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
  }

  const { availableTerms, annualRate } = selectedProduct;

  const expectedTotal = calculateExpectedTotal(monthlyAmount, availableTerms, annualRate);
  const gapToGoal = calculateGapToGoal(goalAmount, expectedTotal);
  const recommendedMonthly = calculateRecommendedMonthly(goalAmount, availableTerms, annualRate);

  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${formatCurrency(expectedTotal)}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`${formatCurrency(gapToGoal)}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${formatCurrency(recommendedMonthly)}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
    </>
  );
};
