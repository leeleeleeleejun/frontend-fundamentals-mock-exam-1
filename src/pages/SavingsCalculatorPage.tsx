import { Border, NavigationBar, Spacing } from 'tosslib';
import { InputSection, ResultSection } from '@components/SavingsCalculatorPage';

export function SavingsCalculatorPage() {
  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />
      <InputSection />
      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />
      <ResultSection />
    </>
  );
}
