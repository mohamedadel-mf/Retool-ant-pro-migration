// features/payin-report/config/tableConfig.ts
import type { ProColumns } from '@ant-design/pro-components';
import type { PayinReport } from '../types/payinReport.interface';

export const payinReportColumns: ProColumns<PayinReport>[] = [
  {
    title: 'UUID',
    dataIndex: 'uuid',
    key: 'uuid',
    width: 280,
    ellipsis: true,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'National ID',
    dataIndex: 'nationalID',
    key: 'nationalID',
    width: 150,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  },
  {
    title: 'Total Due Amount',
    dataIndex: 'totalDueAmount',
    key: 'totalDueAmount',
    render: (dom, entity) => {
      const amount = entity.totalDueAmount;
      return amount ? `$${amount.toLocaleString()}` : '-';
    },
  },
  {
    title: 'Installment Discount',
    dataIndex: 'installementDiscount',
    key: 'installementDiscount',
    render: (dom, entity) => {
      const discount = entity.installementDiscount;
      return discount ? `$${discount.toLocaleString()}` : '-';
    },
  },
  {
    title: 'Organization Name',
    dataIndex: 'organizationName',
    key: 'organizationName',
  },
  {
    title: 'Total Penalties',
    dataIndex: 'totalPenalties',
    key: 'totalPenalties',
    render: (dom, entity) => {
      const penalties = entity.totalPenalties;
      return penalties ? `$${penalties.toLocaleString()}` : '-';
    },
  },
  {
    title: 'Contract Status',
    dataIndex: 'contractStatus',
    key: 'contractStatus',
    filters: [
      { text: 'Pending', value: 'pending' },
      { text: 'In Progress', value: 'in_progress' },
      { text: 'Signed', value: 'signed' },
    ],
    render: (dom, entity) => {
      const status = entity.contractStatus;
      const statusMap = {
        pending: 'Pending',
        in_progress: 'In Progress',
        signed: 'Signed',
      };
      return statusMap[status as keyof typeof statusMap] || status || '-';
    },
  },
  {
    title: 'Assigned Agent',
    dataIndex: 'assignedAgent',
    key: 'assignedAgent',
  },
  {
    title: 'Source Type',
    dataIndex: 'sourceType',
    key: 'sourceType',
    filters: [
      { text: 'Web', value: 'web' },
      { text: 'Mobile', value: 'mobile' },
      { text: 'Agent', value: 'agent' },
      { text: 'Branch', value: 'branch' },
    ],
    render: (dom, entity) => {
      const source = entity.sourceType;
      const sourceMap = {
        web: 'Web',
        mobile: 'Mobile',
        agent: 'Agent',
        branch: 'Branch',
      };
      return sourceMap[source as keyof typeof sourceMap] || source || '-';
    },
  },
];
