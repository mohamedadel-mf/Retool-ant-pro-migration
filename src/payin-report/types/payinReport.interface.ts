export interface PayinReport {
  uuid: string;
  firstName: string;
  lastName: string;
  nationalID: string;
  phone: string;
  totalDueAmount: number;
  installementDiscount: number;
  organizationName: string;
  totalPenalties: number;
  contractStatus: string;
  assignedAgent: string;
  sourceType: string;
  dueDate?: string;
  paymentStatus?: string;
}
