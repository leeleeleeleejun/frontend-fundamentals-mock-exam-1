import { Assets, colors, Flex, ListRow, Text } from 'tosslib';
import { formatCurrency } from '@/utils/formatCurrency.ts';
import type { SavingsProduct } from '../../apis/schemas/savingsProduct.ts';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  savingsProducts: SavingsProduct[];
  selectedProductId: string | null;
  setSelectedProductId: Dispatch<SetStateAction<string | null>>;
};

export const Products = ({ savingsProducts, selectedProductId, setSelectedProductId }: Props) => {
  if (savingsProducts.length === 0) {
    return (
      <Flex justifyContent="center" style={{ margin: '20px 0' }}>
        <Text color={'gray'}>조건에 맞는 적금 상품이 존재하지 않습니다</Text>
      </Flex>
    );
  }

  return (
    <>
      {savingsProducts.map(product => {
        const { id, name, annualRate, minMonthlyAmount, maxMonthlyAmount, availableTerms } = product;
        const formatMinMonthlyAmount = formatCurrency(minMonthlyAmount);
        const formatMaxMonthlyAmount = formatCurrency(maxMonthlyAmount);
        const isSelected = id === selectedProductId;

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
            right={isSelected && <Assets.Icon name="icon-check-circle-green" />}
            onClick={() => {
              if (isSelected) {
                setSelectedProductId(null);
              } else {
                setSelectedProductId(id);
              }
            }}
          />
        );
      })}
    </>
  );
};
