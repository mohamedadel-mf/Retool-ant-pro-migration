import type { InputProps } from 'antd';
import { Input } from 'antd';

export interface MFInputProps extends InputProps {}

export function MFInput(props: MFInputProps) {
  return <Input {...props} />;
}
