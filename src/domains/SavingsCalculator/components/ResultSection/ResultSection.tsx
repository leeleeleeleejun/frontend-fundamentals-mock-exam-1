import { Tab } from 'tosslib';
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
  const { data: savingsProducts = [] } = useSuspenseQuery(useSavingsProductQueries.list());
  const { currentTab, changeTab, TabPanel } = useTab<SavingsResultTab>(SAVINGS_RESULT_TABS);
  const eligibleProducts = savingsProducts.filter(product => isEligibleProduct(filters, product));
  const productsToDisplay = eligibleProducts.length > 0 ? eligibleProducts : savingsProducts;

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
        <Products savingsProducts={productsToDisplay} />
      </TabPanel>
      <TabPanel value={'results'}>
        <Results />
      </TabPanel>
    </>
  );
};
