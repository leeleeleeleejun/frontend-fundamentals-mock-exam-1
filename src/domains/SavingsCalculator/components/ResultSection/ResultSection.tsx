import { ListHeader, Spacing, Tab } from 'tosslib';
import { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SavingResultTabsList, SAVINGS_RESULT_TABS, type SavingsResultTab } from '../../constants.ts';
import { useSavingsProductQueries } from '../../apis/queries/savingsProduct.ts';
import type { SavingsFilters } from '../../type.ts';
import { useTab } from '@/hooks/useTab.ts';
import { Products } from './Products.tsx';
import { Results } from './Results.tsx';
import { isEligibleProduct } from '../../utils/isEligibleProduct.ts';

type Props = {
  filters: SavingsFilters;
};

export const ResultSection = ({ filters }: Props) => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const { data: savingsProducts = [] } = useSuspenseQuery(useSavingsProductQueries.list());
  const { currentTab, changeTab, TabPanel } = useTab<SavingsResultTab>(SAVINGS_RESULT_TABS);
  const selectedProduct = savingsProducts.find(p => p.id === selectedProductId);
  const eligibleProducts = savingsProducts.filter(product => isEligibleProduct(filters, product));
  const recommendedProducts = [...eligibleProducts].sort((a, b) => b.annualRate - a.annualRate).slice(0, 2);

  // 입력이 기본값일 경우 적금 리스트 모두 보여주기
  const productsToDisplay =
    eligibleProducts.length === 0 && filters.monthlyAmount === 0 && filters.goalAmount === 0
      ? savingsProducts
      : eligibleProducts;

  useEffect(() => {
    if (!selectedProductId) {
      return;
    }

    const isValidSelection = productsToDisplay.some(p => p.id === selectedProductId);

    if (!isValidSelection) {
      setSelectedProductId(null);
    }
  }, [productsToDisplay, selectedProductId]);

  return (
    <>
      <Tab onChange={changeTab}>
        {SavingResultTabsList.map(tab => (
          <Tab.Item key={tab} value={tab} selected={tab === currentTab}>
            {SAVINGS_RESULT_TABS[tab]}
          </Tab.Item>
        ))}
      </Tab>
      <TabPanel value={'products'}>
        <Products
          savingsProducts={productsToDisplay}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />
      </TabPanel>
      <TabPanel value={'results'}>
        <Results
          goalAmount={filters.goalAmount}
          monthlyAmount={filters.monthlyAmount}
          selectedProduct={selectedProduct}
        >
          <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
          <Spacing size={12} />
          <Products
            savingsProducts={recommendedProducts}
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
          />
        </Results>
      </TabPanel>
    </>
  );
};
