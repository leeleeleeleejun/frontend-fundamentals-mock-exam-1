import { Tab } from 'tosslib';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SavingResultTabsList, SAVINGS_RESULT_TABS, type SavingsResultTab } from './consts.ts';
import { useSavingsProductQueries } from '@/apis/queries/savingsProduct.ts';
import { useTab } from '@/hooks/useTab.ts';
import { Products } from './Products';
import { Results } from './Results.tsx';

export const ResultSection = () => {
  const { data } = useSuspenseQuery(useSavingsProductQueries.list());
  const { currentTab, changeTab, TabPanel } = useTab<SavingsResultTab>(SAVINGS_RESULT_TABS);

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
        <Products />
      </TabPanel>
      <TabPanel value={'results'}>
        <Results />
      </TabPanel>
    </>
  );
};
