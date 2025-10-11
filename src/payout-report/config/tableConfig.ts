// features/payout-report/config/tableConfig.ts
import type { ProColumns } from '@ant-design/pro-components';
import type { PayoutReport } from '../types/payoutReport.interface';

export const payoutReportColumns: ProColumns<PayoutReport>[] = [
  {
    title: 'UUID',
    dataIndex: 'uuid',
    key: 'uuid',
    ellipsis: true,
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'National ID',
    dataIndex: 'nationalID',
    key: 'nationalID',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Payout Method',
    dataIndex: 'payoutMethod',
    key: 'payoutMethod',
  },
  {
    title: 'Payout Amount',
    dataIndex: 'payoutAmount',
    key: 'payoutAmount',
    render: (dom, entity) => {
      const amount = entity.payoutAmount;
      return amount ? `$${amount.toLocaleString()}` : '-';
    },
  },
  {
    title: 'Payout Date',
    dataIndex: 'payoutDate',
    key: 'payoutDate',
    valueType: 'date',
  },
  {
    title: 'Payout Status',
    dataIndex: 'payoutStatus',
    key: 'payoutStatus',
    render: (dom, entity) => {
      const status = entity.payoutStatus;
      const statusMap = {
        pending: 'Pending',
        processed: 'Processed',
        failed: 'Failed',
        cancelled: 'Cancelled',
      };
      return statusMap[status as keyof typeof statusMap] || status || '-';
    },
  },
  {
    title: 'Reason',
    dataIndex: 'reason',
    key: 'reason',
  },
  {
    title: 'Freeze Reason Notes',
    dataIndex: 'freezeReasonNotes',
    key: 'freezeReasonNotes',
  },
  {
    title: 'Updated On',
    dataIndex: 'updatedOn',
    key: 'updatedOn',
    valueType: 'dateTime',
  },
  {
    title: 'User Segment',
    dataIndex: 'userSegment',
    key: 'userSegment',
    render: (dom, entity) => {
      const segment = entity.userSegment;
      const segmentMap = {
        '1': '1st Timer',
        '2': 'Old User',
      };
      return segmentMap[segment as keyof typeof segmentMap] || segment || '-';
    },
  },
  {
    title: 'Assigned To',
    dataIndex: 'assignedTo',
    key: 'assignedTo',
  },
  {
    title: 'Source Type',
    dataIndex: 'sourceType',
    key: 'sourceType',
  },
  {
    title: 'Organization Name',
    dataIndex: 'organizationName',
    key: 'organizationName',
  },
  {
    title: 'User ID',
    dataIndex: 'userID',
    key: 'userID',
  },
  {
    title: 'Organization ID',
    dataIndex: 'organizationID',
    key: 'organizationID',
  },
  {
    title: 'Payment Method ID',
    dataIndex: 'paymentMethodID',
    key: 'paymentMethodID',
  },
  {
    title: 'Payment Method Name',
    dataIndex: 'paymentMethodName',
    key: 'paymentMethodName',
  },
  {
    title: 'Cashout Due Date',
    dataIndex: 'cashoutDueDate',
    key: 'cashoutDueDate',
    valueType: 'date',
  },
  {
    title: 'Is New User',
    dataIndex: 'isNewUser',
    key: 'isNewUser',
    render: (dom, entity) => {
      return entity.isNewUser ? 'Yes' : 'No';
    },
  },
  {
    title: 'Contract Status',
    dataIndex: 'contractStatus',
    key: 'contractStatus',
    render: (dom, entity) => {
      const status = entity.contractStatus;
      const statusMap = {
        pending: 'Pending',
        'in-progress': 'In Progress',
        signed: 'Signed',
      };
      return statusMap[status as keyof typeof statusMap] || status || '-';
    },
  },
];
