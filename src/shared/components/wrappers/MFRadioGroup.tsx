import type { RadioGroupProps } from 'antd';
import { Radio } from 'antd';

export interface MFRadioGroupProps extends RadioGroupProps {}

export function MFRadioGroup(props: MFRadioGroupProps) {
  return <Radio.Group {...props} />;
}
