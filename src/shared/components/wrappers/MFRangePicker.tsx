import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';

const { RangePicker } = DatePicker;

export interface MFRangePickerProps extends RangePickerProps {}

export function MFRangePicker(props: MFRangePickerProps) {
  return <RangePicker {...props} />;
}
