import { Assets, colors, ListRow } from 'tosslib';
import { formatCurrency } from '@/utils/formatCurrency.ts';
import type { SavingsProduct } from '../../apis/schemas/savingsProduct.ts';

type Props = { savingsProducts: SavingsProduct[] };

export const Products = ({ savingsProducts }: Props) => {
  return (
    <>
      {savingsProducts.map(product => {
        const { id, name, annualRate, minMonthlyAmount, maxMonthlyAmount, availableTerms } = product;
        const formatMinMonthlyAmount = formatCurrency(minMonthlyAmount);
        const formatMaxMonthlyAmount = formatCurrency(maxMonthlyAmount);

        return (
          <ListRow
            key={id}
            contents={
              <ListRow.Texts
                type="3RowTypeA"
                top={name}
                topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
                middle={`연 이자율: ${annualRate}%`}
                middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
                bottom={`${formatMinMonthlyAmount}원 ~ ${formatMaxMonthlyAmount}원 | ${availableTerms}개월`}
                bottomProps={{ fontSize: 13, color: colors.grey600 }}
              />
            }
            right={<Assets.Icon name="icon-check-circle-green" />}
            onClick={() => {}}
          />
        );
      })}
    </>
  );
};
