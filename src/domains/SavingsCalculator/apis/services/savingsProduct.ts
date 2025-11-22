import { handleApiError } from '@/apis/handleApiError.ts';
import { http } from 'tosslib';
import { type SavingsProduct, SavingsProductSchema } from '../schemas/savingsProduct.ts';

export const getSavingsProducts = async () =>
  handleApiError(async () => {
    const data = await http.get<SavingsProduct[]>('/api/savings-products');
    return SavingsProductSchema.array().parse(data);
  });
