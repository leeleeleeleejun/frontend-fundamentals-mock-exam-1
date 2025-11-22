import { Border, Spacing } from 'tosslib';
import type { SavingsProduct } from '../../apis/schemas/savingsProduct.ts';
import type { ReactNode } from 'react';
import { SimulationResult } from './SimulationResult.tsx';

type Props = {
  goalAmount: number;
  monthlyAmount: number;
  selectedProduct: SavingsProduct | undefined;
  children: ReactNode;
};

export const Results = ({ goalAmount, monthlyAmount, selectedProduct, children }: Props) => {
  return (
    <>
      <Spacing size={8} />
      <SimulationResult selectedProduct={selectedProduct} goalAmount={goalAmount} monthlyAmount={monthlyAmount} />
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />
      {children}
      <Spacing size={40} />
    </>
  );
};
