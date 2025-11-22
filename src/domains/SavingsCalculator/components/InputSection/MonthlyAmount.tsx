import { TextField } from 'tosslib';
import type { ChangeEvent } from 'react';

export const MonthlyAmount = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <TextField
    label="월 납입액"
    placeholder="희망 월 납입액을 입력하세요"
    suffix="원"
    value={value}
    onChange={onChange}
  />
);
