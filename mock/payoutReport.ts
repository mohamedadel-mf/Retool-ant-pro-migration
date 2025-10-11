// Payout Report mock data with all specified columns
import type { Request, Response } from "express";
import type { PayoutReport } from "../src/payout-report/types/payoutReport.interface";

const payoutReports: PayoutReport[] = [
  {
    uuid: "b8a2f4c7-5e3b-4a3c-9e12-8d6f12345abc",
    fullName: "Mohamed Adel",
    nationalID: "29901011234567",
    phoneNumber: "+20 100 123 4567",
    payoutMethod: "Bank Transfer",
    payoutAmount: 15000,
    payoutDate: "2025-01-15",
    payoutStatus: "processed",
    reason: "Monthly payout",
    freezeReasonNotes: "",
    updatedOn: "2025-01-15T10:30:00Z",
    userSegment: "1",
    assignedTo: "Agent 1",
    sourceType: "web",
    organizationName: "Organization 1",
    userID: 1001,
    organizationID: 1,
    paymentMethodID: 1,
    paymentMethodName: "Bank Transfer",
    cashoutDueDate: "2025-01-10",
    isNewUser: false,
    contractStatus: "signed",
  },
  {
    uuid: "f3c91a2e-9a12-4cb8-a3e7-2a61b56789de",
    fullName: "Sara Mahmoud",
    nationalID: "29902021234567",
    phoneNumber: "+20 111 654 9870",
    payoutMethod: "Credit Card",
    payoutAmount: 8000,
    payoutDate: "2025-01-16",
    payoutStatus: "pending",
    reason: "Early payout request",
    freezeReasonNotes: "Verification required",
    updatedOn: "2025-01-16T14:20:00Z",
    userSegment: "2",
    assignedTo: "Agent 2",
    sourceType: "mobile",
    organizationName: "Organization 2",
    userID: 1002,
    organizationID: 2,
    paymentMethodID: 2,
    paymentMethodName: "Credit Card",
    cashoutDueDate: "2025-01-20",
    isNewUser: true,
    contractStatus: "pending",
  },
  {
    uuid: "e1234c5a-5a21-4fa1-99de-9a1b23456789",
    fullName: "Omar Hossam",
    nationalID: "29903031234567",
    phoneNumber: "+20 122 321 7654",
    payoutMethod: "PayPal",
    payoutAmount: 35000,
    payoutDate: "2025-01-14",
    payoutStatus: "failed",
    reason: "Insufficient funds",
    freezeReasonNotes: "Account balance low",
    updatedOn: "2025-01-14T16:45:00Z",
    userSegment: "1",
    assignedTo: "Agent 3",
    sourceType: "agent",
    organizationName: "Organization 3",
    userID: 1003,
    organizationID: 3,
    paymentMethodID: 3,
    paymentMethodName: "PayPal",
    cashoutDueDate: "2025-01-12",
    isNewUser: false,
    contractStatus: "in-progress",
  },
  {
    uuid: "a91c33e1-75b2-4b14-9d19-33c4c8ef567a",
    fullName: "Nour El-Din Khaled",
    nationalID: "29904041234567",
    phoneNumber: "+20 100 888 1122",
    payoutMethod: "Cash",
    payoutAmount: 12000,
    payoutDate: "2025-01-17",
    payoutStatus: "cancelled",
    reason: "User requested cancellation",
    freezeReasonNotes: "Cancelled by user",
    updatedOn: "2025-01-17T09:15:00Z",
    userSegment: "2",
    assignedTo: "Agent 1",
    sourceType: "branch",
    organizationName: "Organization 1",
    userID: 1004,
    organizationID: 1,
    paymentMethodID: 4,
    paymentMethodName: "Cash",
    cashoutDueDate: "2025-01-15",
    isNewUser: false,
    contractStatus: "signed",
  },
  {
    uuid: "c3b5f8e2-67a1-4c23-9f11-71b2a4e598cd",
    fullName: "Mona Youssef",
    nationalID: "29905051234567",
    phoneNumber: "+20 111 555 8877",
    payoutMethod: "Bank Transfer",
    payoutAmount: 28000,
    payoutDate: "2025-01-18",
    payoutStatus: "processed",
    reason: "Quarterly bonus",
    freezeReasonNotes: "",
    updatedOn: "2025-01-18T11:30:00Z",
    userSegment: "1",
    assignedTo: "Agent 2",
    sourceType: "web",
    organizationName: "Organization 4",
    userID: 1005,
    organizationID: 4,
    paymentMethodID: 1,
    paymentMethodName: "Bank Transfer",
    cashoutDueDate: "2025-01-16",
    isNewUser: true,
    contractStatus: "pending",
  },
  {
    uuid: "d4f22b12-9e33-4f12-8822-5a2c333bb812",
    fullName: "Hassan Ibrahim",
    nationalID: "29906061234567",
    phoneNumber: "+20 120 111 3344",
    payoutMethod: "Credit Card",
    payoutAmount: 55000,
    payoutDate: "2025-01-13",
    payoutStatus: "processed",
    reason: "Annual payout",
    freezeReasonNotes: "",
    updatedOn: "2025-01-13T13:20:00Z",
    userSegment: "2",
    assignedTo: "Agent 3",
    sourceType: "mobile",
    organizationName: "Organization 2",
    userID: 1006,
    organizationID: 2,
    paymentMethodID: 2,
    paymentMethodName: "Credit Card",
    cashoutDueDate: "2025-01-11",
    isNewUser: false,
    contractStatus: "signed",
  },
  {
    uuid: "e7b1a3c2-4d56-4f89-b5a7-1f223311aa77",
    fullName: "Laila Ahmed",
    nationalID: "29907071234567",
    phoneNumber: "+20 101 777 2233",
    payoutMethod: "PayPal",
    payoutAmount: 18000,
    payoutDate: "2025-01-19",
    payoutStatus: "pending",
    reason: "Regular payout",
    freezeReasonNotes: "Awaiting approval",
    updatedOn: "2025-01-19T15:40:00Z",
    userSegment: "1",
    assignedTo: "Agent 1",
    sourceType: "agent",
    organizationName: "Organization 3",
    userID: 1007,
    organizationID: 3,
    paymentMethodID: 3,
    paymentMethodName: "PayPal",
    cashoutDueDate: "2025-01-17",
    isNewUser: true,
    contractStatus: "in-progress",
  },
  {
    uuid: "f2a8e9b3-1c4a-4d55-8b2e-9f2c77bba9d3",
    fullName: "Karim Nasser",
    nationalID: "29908081234567",
    phoneNumber: "+20 122 999 4455",
    payoutMethod: "Cash",
    payoutAmount: 22000,
    payoutDate: "2025-01-20",
    payoutStatus: "failed",
    reason: "Bank account closed",
    freezeReasonNotes: "Need new bank details",
    updatedOn: "2025-01-20T08:25:00Z",
    userSegment: "2",
    assignedTo: "Agent 2",
    sourceType: "branch",
    organizationName: "Organization 1",
    userID: 1008,
    organizationID: 1,
    paymentMethodID: 4,
    paymentMethodName: "Cash",
    cashoutDueDate: "2025-01-18",
    isNewUser: false,
    contractStatus: "signed",
  },
  {
    uuid: "a12f4b77-8d99-4c45-bb22-77a8f123ee44",
    fullName: "Yara Samir",
    nationalID: "29909091234567",
    phoneNumber: "+20 112 555 2233",
    payoutMethod: "Bank Transfer",
    payoutAmount: 9000,
    payoutDate: "2025-01-21",
    payoutStatus: "processed",
    reason: "Monthly payout",
    freezeReasonNotes: "",
    updatedOn: "2025-01-21T12:10:00Z",
    userSegment: "1",
    assignedTo: "Agent 3",
    sourceType: "web",
    organizationName: "Organization 4",
    userID: 1009,
    organizationID: 4,
    paymentMethodID: 1,
    paymentMethodName: "Bank Transfer",
    cashoutDueDate: "2025-01-19",
    isNewUser: true,
    contractStatus: "pending",
  },
  {
    uuid: "b55e88aa-2f33-44c9-822a-33a4a2a88900",
    fullName: "Mahmoud Fathy",
    nationalID: "29910101234567",
    phoneNumber: "+20 100 333 6677",
    payoutMethod: "Credit Card",
    payoutAmount: 32000,
    payoutDate: "2025-01-22",
    payoutStatus: "cancelled",
    reason: "Duplicate transaction",
    freezeReasonNotes: "System detected duplicate",
    updatedOn: "2025-01-22T14:50:00Z",
    userSegment: "2",
    assignedTo: "Agent 1",
    sourceType: "mobile",
    organizationName: "Organization 2",
    userID: 1010,
    organizationID: 2,
    paymentMethodID: 2,
    paymentMethodName: "Credit Card",
    cashoutDueDate: "2025-01-20",
    isNewUser: false,
    contractStatus: "signed",
  },
];

const getPayoutReport = (req: Request, res: Response) => {
  const { 
    pageNumber = 1, 
    pageSize = 10,
    dateTimeFrom,
    dateTimeTo,
    cashoutStatus,
    freeze,
    payoutMethod,
    onlyMoreThan500,
    contractStatuses = [],
    payoutType,
    userSegment,
    userTypes = [],
    organizationNames = []
  } = req.body || {};

  // Start with all reports
  let filteredReports = [...payoutReports];

  // Apply date range filter
  if (dateTimeFrom && dateTimeTo) {
    filteredReports = filteredReports.filter(report => {
      const reportDate = report.payoutDate;
      return reportDate >= dateTimeFrom && reportDate <= dateTimeTo;
    });
  }

  // Apply cashout status filter
  if (cashoutStatus) {
    filteredReports = filteredReports.filter(report => 
      report.payoutStatus === cashoutStatus
    );
  }

  // Apply freeze filter
  if (freeze !== undefined) {
    filteredReports = filteredReports.filter(report => 
      report.freezeReasonNotes !== "" === freeze
    );
  }

  // Apply payout method filter
  if (payoutMethod) {
    filteredReports = filteredReports.filter(report => 
      report.payoutMethod === payoutMethod
    );
  }

  // Apply payout amount filter
  if (onlyMoreThan500) {
    if (onlyMoreThan500 === '>500') {
      filteredReports = filteredReports.filter(report => report.payoutAmount > 500);
    } else if (onlyMoreThan500 === '<=500') {
      filteredReports = filteredReports.filter(report => report.payoutAmount <= 500);
    }
    // 'all' includes all amounts
  }

  // Apply contract status filter
  const contractStatusesArray = Array.isArray(contractStatuses) ? contractStatuses : [contractStatuses].filter(Boolean);
  if (contractStatusesArray.length > 0) {
    filteredReports = filteredReports.filter(report => 
      contractStatusesArray.includes(report.contractStatus)
    );
  }

  // Apply payout type filter (you might need to map this to your data)
  if (payoutType) {
    // Add logic based on how payoutType maps to your data
  }

  // Apply user segment filter
  if (userSegment !== undefined) {
    filteredReports = filteredReports.filter(report => 
      report.userSegment === userSegment.toString()
    );
  }

  // Apply user type filter
  const userTypesArray = Array.isArray(userTypes) ? userTypes : [userTypes].filter(Boolean);
  if (userTypesArray.length > 0) {
    // Add logic based on how userTypes maps to your data
  }

  // Apply organization name filter
  const organizationNamesArray = Array.isArray(organizationNames) ? organizationNames : [organizationNames].filter(Boolean);
  if (organizationNamesArray.length > 0) {
    filteredReports = filteredReports.filter(report => 
      organizationNamesArray.includes(report.organizationName)
    );
  }

  // Calculate pagination
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredReports.slice(startIndex, endIndex);

  const totalItems = filteredReports.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  res.json({
    data: paginatedData,
    count: totalItems,
    paging: {
      pageSize: Number(pageSize),
      pageNumber: Number(pageNumber),
      totalPages,
      hasNext: pageNumber < totalPages,
      hasPrevious: pageNumber > 1,
      totalItems,
    },
  });
};

export default {
  "POST /api/PayoutReport": getPayoutReport,
};