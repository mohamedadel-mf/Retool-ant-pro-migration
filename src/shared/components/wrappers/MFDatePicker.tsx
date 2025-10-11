import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

export interface MFDatePickerProps extends DatePickerProps {}

export function MFDatePicker(props: MFDatePickerProps) {
  return <DatePicker {...props} />;
}
