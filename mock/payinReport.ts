
// Payin Report mock data with all specified columns
import type { Request, Response } from "express";

const payinReports = [
  {
    uuid: "b8a2f4c7-5e3b-4a3c-9e12-8d6f12345abc",
    firstName: "Mohamed",
    lastName: "Adel",
    nationalID: "29901011234567",
    phone: "+20 100 123 4567",
    totalDueAmount: 15000,
    installementDiscount: 500,
    organizationName: "Organization 1",
    totalPenalties: 200,
    contractStatus: "signed",
    assignedAgent: "Agent 1",
    sourceType: "web",
    dueDate: "2025-07-15",
    paymentStatus: "partially_paid",
    userType: "individual",
    createdAt: "2025-06-15",
  },
  {
    uuid: "f3c91a2e-9a12-4cb8-a3e7-2a61b56789de",
    firstName: "Sara",
    lastName: "Mahmoud",
    nationalID: "29902021234567",
    phone: "+20 111 654 9870",
    totalDueAmount: 8000,
    installementDiscount: 300,
    organizationName: "Organization 2",
    totalPenalties: 150,
    contractStatus: "pending",
    assignedAgent: "Agent 2",
    sourceType: "mobile",
    dueDate: "2025-08-20",
    paymentStatus: "not_paid",
    userType: "individual",
    createdAt: "2025-05-20",
  },
  {
    uuid: "e1234c5a-5a21-4fa1-99de-9a1b23456789",
    firstName: "Omar",
    lastName: "Hossam",
    nationalID: "29903031234567",
    phone: "+20 122 321 7654",
    totalDueAmount: 35000,
    installementDiscount: 1200,
    organizationName: "Organization 3",
    totalPenalties: 500,
    contractStatus: "in_progress",
    assignedAgent: "Agent 3",
    sourceType: "agent",
    dueDate: "2025-09-10",
    paymentStatus: "paid",
    userType: "self_pay_corporate",
    createdAt: "2025-07-10",
  },
  {
    uuid: "a91c33e1-75b2-4b14-9d19-33c4c8ef567a",
    firstName: "Nour",
    lastName: "El-Din Khaled",
    nationalID: "29904041234567",
    phone: "+20 100 888 1122",
    totalDueAmount: 12000,
    installementDiscount: 400,
    organizationName: "Organization 1",
    totalPenalties: 100,
    contractStatus: "signed",
    assignedAgent: "Agent 1",
    sourceType: "branch",
    dueDate: "2025-06-05",
    paymentStatus: "partially_paid",
    userType: "individual",
    createdAt: "2025-04-05",
  },
  {
    uuid: "c3b5f8e2-67a1-4c23-9f11-71b2a4e598cd",
    firstName: "Mona",
    lastName: "Youssef",
    nationalID: "29905051234567",
    phone: "+20 111 555 8877",
    totalDueAmount: 28000,
    installementDiscount: 800,
    organizationName: "Organization 4",
    totalPenalties: 350,
    contractStatus: "pending",
    assignedAgent: "Agent 2",
    sourceType: "web",
    dueDate: "2025-10-12",
    paymentStatus: "not_paid",
    userType: "self_pay_corporate",
    createdAt: "2025-08-12",
  },
  {
    uuid: "d4f22b12-9e33-4f12-8822-5a2c333bb812",
    firstName: "Hassan",
    lastName: "Ibrahim",
    nationalID: "29906061234567",
    phone: "+20 120 111 3344",
    totalDueAmount: 55000,
    installementDiscount: 1500,
    organizationName: "Organization 2",
    totalPenalties: 600,
    contractStatus: "signed",
    assignedAgent: "Agent 3",
    sourceType: "mobile",
    dueDate: "2025-05-18",
    paymentStatus: "paid",
    userType: "individual",
    createdAt: "2025-03-18",
  },
  {
    uuid: "e7b1a3c2-4d56-4f89-b5a7-1f223311aa77",
    firstName: "Laila",
    lastName: "Ahmed",
    nationalID: "29907071234567",
    phone: "+20 101 777 2233",
    totalDueAmount: 18000,
    installementDiscount: 600,
    organizationName: "Organization 3",
    totalPenalties: 250,
    contractStatus: "in_progress",
    assignedAgent: "Agent 1",
    sourceType: "agent",
    dueDate: "2025-11-01",
    paymentStatus: "partially_paid",
    userType: "individual",
    createdAt: "2025-09-01",
  },
  {
    uuid: "f2a8e9b3-1c4a-4d55-8b2e-9f2c77bba9d3",
    firstName: "Karim",
    lastName: "Nasser",
    nationalID: "29908081234567",
    phone: "+20 122 999 4455",
    totalDueAmount: 22000,
    installementDiscount: 700,
    organizationName: "Organization 1",
    totalPenalties: 180,
    contractStatus: "signed",
    assignedAgent: "Agent 2",
    sourceType: "branch",
    dueDate: "2025-04-14",
    paymentStatus: "paid",
    userType: "self_pay_corporate",
    createdAt: "2025-02-14",
  },
  {
    uuid: "a12f4b77-8d99-4c45-bb22-77a8f123ee44",
    firstName: "Yara",
    lastName: "Samir",
    nationalID: "29909091234567",
    phone: "+20 112 555 2233",
    totalDueAmount: 9000,
    installementDiscount: 350,
    organizationName: "Organization 4",
    totalPenalties: 120,
    contractStatus: "pending",
    assignedAgent: "Agent 3",
    sourceType: "web",
    dueDate: "2025-09-25",
    paymentStatus: "not_paid",
    userType: "individual",
    createdAt: "2025-07-25",
  },
  {
    uuid: "b55e88aa-2f33-44c9-822a-33a4a2a88900",
    firstName: "Mahmoud",
    lastName: "Fathy",
    nationalID: "29910101234567",
    phone: "+20 100 333 6677",
    totalDueAmount: 32000,
    installementDiscount: 900,
    organizationName: "Organization 2",
    totalPenalties: 400,
    contractStatus: "signed",
    assignedAgent: "Agent 1",
    sourceType: "mobile",
    dueDate: "2025-07-30",
    paymentStatus: "paid",
    userType: "self_pay_corporate",
    createdAt: "2025-05-30",
  },
  {
    uuid: "c44a33bb-1234-4a77-9b55-11a2c334ef88",
    firstName: "Aya",
    lastName: "Gamal",
    nationalID: "29911111234567",
    phone: "+20 111 777 1199",
    totalDueAmount: 48000,
    installementDiscount: 1300,
    organizationName: "Organization 3",
    totalPenalties: 550,
    contractStatus: "in_progress",
    assignedAgent: "Agent 2",
    sourceType: "agent",
    dueDate: "2025-10-08",
    paymentStatus: "partially_paid",
    userType: "individual",
    createdAt: "2025-08-08",
  },
  {
    uuid: "d99c77e2-44e1-4b88-8a55-22b3a1e9cc66",
    firstName: "Tamer",
    lastName: "Khalil",
    nationalID: "29912121234567",
    phone: "+20 120 222 8877",
    totalDueAmount: 14000,
    installementDiscount: 450,
    organizationName: "Organization 1",
    totalPenalties: 160,
    contractStatus: "pending",
    assignedAgent: "Agent 3",
    sourceType: "branch",
    dueDate: "2025-06-22",
    paymentStatus: "not_paid",
    userType: "individual",
    createdAt: "2025-04-22",
  },
  {
    uuid: "e88f55a3-66d2-45b8-9a77-44c3b7e2aa11",
    firstName: "Farah",
    lastName: "Mostafa",
    nationalID: "29913131234567",
    phone: "+20 122 111 8899",
    totalDueAmount: 26000,
    installementDiscount: 750,
    organizationName: "Organization 4",
    totalPenalties: 300,
    contractStatus: "signed",
    assignedAgent: "Agent 1",
    sourceType: "web",
    dueDate: "2025-08-08",
    paymentStatus: "paid",
    userType: "self_pay_corporate",
    createdAt: "2025-06-08",
  },
  {
    uuid: "f77b22c4-8e9f-4c11-8833-66a9b44fdd22",
    firstName: "Ahmed",
    lastName: "Magdy",
    nationalID: "29914141234567",
    phone: "+20 100 444 2211",
    totalDueAmount: 19000,
    installementDiscount: 550,
    organizationName: "Organization 2",
    totalPenalties: 220,
    contractStatus: "in_progress",
    assignedAgent: "Agent 2",
    sourceType: "mobile",
    dueDate: "2025-05-03",
    paymentStatus: "partially_paid",
    userType: "individual",
    createdAt: "2025-03-03",
  },
  {
    uuid: "a11e22f5-99b3-49d8-bb55-99f1a88cdd44",
    firstName: "Dina",
    lastName: "Farouk",
    nationalID: "29915151234567",
    phone: "+20 111 333 9999",
    totalDueAmount: 42000,
    installementDiscount: 1100,
    organizationName: "Organization 3",
    totalPenalties: 480,
    contractStatus: "signed",
    assignedAgent: "Agent 3",
    sourceType: "agent",
    dueDate: "2025-11-15",
    paymentStatus: "paid",
    userType: "self_pay_corporate",
    createdAt: "2025-09-15",
  },
  {
    uuid: "b22a33f6-7c4b-4123-aa44-22f3c55ff887",
    firstName: "Ola",
    lastName: "Sherif",
    nationalID: "29916161234567",
    phone: "+20 120 555 4477",
    totalDueAmount: 11000,
    installementDiscount: 380,
    organizationName: "Organization 1",
    totalPenalties: 140,
    contractStatus: "pending",
    assignedAgent: "Agent 1",
    sourceType: "branch",
    dueDate: "2025-09-18",
    paymentStatus: "not_paid",
    userType: "individual",
    createdAt: "2025-07-18",
  },
  {
    uuid: "c33b44f7-9d5c-49a7-cc33-33a4e66aa998",
    firstName: "Mostafa",
    lastName: "Saad",
    nationalID: "29917171234567",
    phone: "+20 122 666 7788",
    totalDueAmount: 37000,
    installementDiscount: 1000,
    organizationName: "Organization 4",
    totalPenalties: 420,
    contractStatus: "in_progress",
    assignedAgent: "Agent 2",
    sourceType: "web",
    dueDate: "2025-07-05",
    paymentStatus: "partially_paid",
    userType: "self_pay_corporate",
    createdAt: "2025-05-05",
  },
  {
    uuid: "d44c55f8-8e6d-4b9a-dd22-44b5f77bb889",
    firstName: "Reem",
    lastName: "Ehab",
    nationalID: "29918181234567",
    phone: "+20 100 888 6655",
    totalDueAmount: 23000,
    installementDiscount: 650,
    organizationName: "Organization 2",
    totalPenalties: 270,
    contractStatus: "signed",
    assignedAgent: "Agent 3",
    sourceType: "mobile",
    dueDate: "2025-10-28",
    paymentStatus: "paid",
    userType: "individual",
    createdAt: "2025-08-28",
  },
  {
    uuid: "e55d66f9-7f7e-4caa-ee11-55c6g88cc990",
    firstName: "Ali",
    lastName: "Hamdy",
    nationalID: "29919191234567",
    phone: "+20 111 444 5566",
    totalDueAmount: 16000,
    installementDiscount: 480,
    organizationName: "Organization 3",
    totalPenalties: 190,
    contractStatus: "pending",
    assignedAgent: "Agent 1",
    sourceType: "agent",
    dueDate: "2025-06-14",
    paymentStatus: "not_paid",
    userType: "individual",
    createdAt: "2025-04-14",
  },
  {
    uuid: "f66e77fa-6g8f-4dbb-ff00-66d7h99dd221",
    firstName: "Huda",
    lastName: "Said",
    nationalID: "29920201234567",
    phone: "+20 122 222 3344",
    totalDueAmount: 52000,
    installementDiscount: 1400,
    organizationName: "Organization 1",
    totalPenalties: 580,
    contractStatus: "signed",
    assignedAgent: "Agent 2",
    sourceType: "branch",
    dueDate: "2025-08-30",
    paymentStatus: "paid",
    userType: "self_pay_corporate",
    createdAt: "2025-06-30",
  },
];


const getPayinReport = (req: Request, res: Response) => {
  const { 
    pageNumber = 1, 
    pageSize = 10,
    dueDateFrom,
    dueDateTo,
    paymentStatuses = [],
    totalDueRanges = [],
    contractStatuses = [],
    userTypes = [],
    organizationNames = [],
    positions
  } = req.body || {};

  // Start with all reports
  let filteredReports = [...payinReports];

  // Apply due date range filter
  if (dueDateFrom && dueDateTo) {
    filteredReports = filteredReports.filter(report => {
      const reportDate = report.dueDate;
      return reportDate >= dueDateFrom && reportDate <= dueDateTo;
    });
  }

  // Normalize arrays - convert strings to arrays
  const paymentStatusesArray = Array.isArray(paymentStatuses) ? paymentStatuses : [paymentStatuses].filter(Boolean);
  const totalDueRangesArray = Array.isArray(totalDueRanges) ? totalDueRanges : [totalDueRanges].filter(Boolean);
  const contractStatusesArray = Array.isArray(contractStatuses) ? contractStatuses : [contractStatuses].filter(Boolean);
  const userTypesArray = Array.isArray(userTypes) ? userTypes : [userTypes].filter(Boolean);
  const organizationNamesArray = Array.isArray(organizationNames) ? organizationNames : [organizationNames].filter(Boolean);

  // Apply payment status filter
  if (paymentStatusesArray.length > 0) {
    filteredReports = filteredReports.filter(report => 
      paymentStatusesArray.includes(report.paymentStatus)
    );
  }

  // Apply total due range filter
  if (totalDueRangesArray.length > 0) {
    filteredReports = filteredReports.filter(report => {
      const amount = report.totalDueAmount;
      return totalDueRangesArray.some((range: string) => {
        switch (range) {
          case '1-4999': return amount >= 1 && amount <= 4999;
          case '5000-15000': return amount >= 5000 && amount <= 15000;
          case '15000-25000': return amount >= 15000 && amount <= 25000;
          case '25000-50000': return amount >= 25000 && amount <= 50000;
          case '50000+': return amount > 50000;
          default: return true;
        }
      });
    });
  }

  // Apply contract status filter
  if (contractStatusesArray.length > 0) {
    filteredReports = filteredReports.filter(report => 
      contractStatusesArray.includes(report.contractStatus)
    );
  }

  // Apply user type filter
  if (userTypesArray.length > 0) {
    filteredReports = filteredReports.filter(report => 
      userTypesArray.includes(report.userType)
    );
  }

  // Apply organization name filter
  if (organizationNamesArray.length > 0) {
    filteredReports = filteredReports.filter(report => 
      organizationNamesArray.includes(report.organizationName)
    );
  }

  // Apply positions filter
  if (positions) {
    filteredReports = filteredReports.slice(0, positions);
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
  "POST /api/PayinReport": getPayinReport,
};