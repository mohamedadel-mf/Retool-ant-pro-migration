export interface PayoutReport {
  uuid: string;
  fullName: string;
  nationalID: string;
  phoneNumber: string;
  payoutMethod: string;
  payoutAmount: number;
  payoutDate: string;
  payoutStatus: string;
  reason: string;
  freezeReasonNotes: string;
  updatedOn: string;
  userSegment: string;
  assignedTo: string;
  sourceType: string;
  organizationName: string;
  userID: number;
  organizationID: number;
  paymentMethodID: number;
  paymentMethodName: string;
  cashoutDueDate: string;
  isNewUser: boolean;
  contractStatus: string;
}
