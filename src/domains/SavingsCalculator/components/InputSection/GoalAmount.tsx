import { TextField } from 'tosslib';
import type { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const GoalAmount = ({ value, onChange }: Props) => (
  <TextField label="목표 금액" placeholder="목표 금액을 입력하세요" suffix="원" value={value} onChange={onChange} />
);
