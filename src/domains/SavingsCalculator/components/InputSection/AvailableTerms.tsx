import { SelectBottomSheet } from 'tosslib';
import { AVAILABLE_TERMS_OPTION, type AvailableTermsOption } from '../../constants.ts';

type Props = {
  value: AvailableTermsOption;
  onChange: (value: AvailableTermsOption) => void;
};

export const AvailableTerms = ({ value, onChange }: Props) => (
  <SelectBottomSheet label="저축 기간" title="저축 기간을 선택해주세요" value={value} onChange={onChange}>
    {AVAILABLE_TERMS_OPTION.map((option: AvailableTermsOption) => (
      <SelectBottomSheet.Option key={option} value={option}>
        {option}개월
      </SelectBottomSheet.Option>
    ))}
  </SelectBottomSheet>
);
