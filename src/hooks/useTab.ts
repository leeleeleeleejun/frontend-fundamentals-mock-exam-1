import { useState, type ReactNode } from 'react';

export const useTab = <TabKey extends string>(tabs: Record<TabKey, string>, initialTab?: TabKey) => {
  const [currentTab, setCurrentTab] = useState<TabKey>(initialTab ?? (Object.keys(tabs)[0] as TabKey));

  const TabPanel = ({ value, children }: { value: TabKey; children: ReactNode }) => {
    return value === currentTab ? children : null;
  };

  const changeTab = (val: string | TabKey) => setCurrentTab(val as TabKey);

  return {
    currentTab,
    changeTab,
    TabPanel,
  };
};
