import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

export interface MFInputNumberProps extends InputNumberProps {}

export function MFInputNumber(props: MFInputNumberProps) {
  return <InputNumber {...props} />;
}
