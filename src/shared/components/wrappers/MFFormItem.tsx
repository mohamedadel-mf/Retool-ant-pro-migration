import type { FormItemProps } from 'antd';
import { Form } from 'antd';

export interface MFFormItemProps extends FormItemProps {}

export function MFFormItem(props: MFFormItemProps) {
  return <Form.Item {...props} />;
}
