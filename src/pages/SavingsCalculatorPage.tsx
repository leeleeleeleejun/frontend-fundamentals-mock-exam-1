import { useState } from 'react';
import { Border, NavigationBar, Spacing } from 'tosslib';
import { InputSection, ResultSection } from '@/domains/SavingsCalculator/components';
import { Suspense } from '@suspensive/react';
import type { SavingsFilters, SavingsFiltersKey } from '@/domains/SavingsCalculator/type.ts';

export function SavingsCalculatorPage() {
  const [filters, setFilters] = useState<SavingsFilters>({
    monthlyAmount: 0,
    goalAmount: 0,
    availableTerms: 6,
  });

  const handleSetFilters = (field: SavingsFiltersKey, newValue: number) => {
    setFilters(prevState => ({ ...prevState, [field]: newValue }));
  };

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />
      <InputSection filters={filters} handleSetFilters={handleSetFilters} />
      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />
      <Suspense fallback={null}>
        <ResultSection filters={filters} />
      </Suspense>
    </>
  );
}
