import type { Request, Response } from "express";

// Add createdAt dates to users (spread over the last 6 months)
const users = [
  {
    uuid: "b8a2f4c7-5e3b-4a3c-9e12-8d6f12345abc",
    name: "Mohamed Adel",
    email: "mohamed.adel@example.com",
    phone: "+20 100 123 4567",
    birthdate: "1994-06-21",
    csoStatus: 1, // Passed
    createdAt: "2025-06-15",
  },
  {
    uuid: "f3c91a2e-9a12-4cb8-a3e7-2a61b56789de",
    name: "Sara Mahmoud",
    email: "sara.mahmoud@example.com",
    phone: "+20 111 654 9870",
    birthdate: "1992-03-11",
    csoStatus: 2, // Failed
    createdAt: "2025-05-20",
  },
  {
    uuid: "e1234c5a-5a21-4fa1-99de-9a1b23456789",
    name: "Omar Hossam",
    email: "omar.hossam@example.com",
    phone: "+20 122 321 7654",
    birthdate: "1990-12-05",
    csoStatus: 3, // No CSO
    createdAt: "2025-07-10",
  },
  {
    uuid: "a91c33e1-75b2-4b14-9d19-33c4c8ef567a",
    name: "Nour El-Din Khaled",
    email: "nour.khaled@example.com",
    phone: "+20 100 888 1122",
    birthdate: "1996-02-18",
    csoStatus: 1, // Passed
    createdAt: "2025-04-05",
  },
  {
    uuid: "c3b5f8e2-67a1-4c23-9f11-71b2a4e598cd",
    name: "Mona Youssef",
    email: "mona.youssef@example.com",
    phone: "+20 111 555 8877",
    birthdate: "1991-08-09",
    csoStatus: 2, // Failed
    createdAt: "2025-08-12",
  },
  {
    uuid: "d4f22b12-9e33-4f12-8822-5a2c333bb812",
    name: "Hassan Ibrahim",
    email: "hassan.ibrahim@example.com",
    phone: "+20 120 111 3344",
    birthdate: "1989-04-12",
    csoStatus: 4, // N/A
    createdAt: "2025-03-18",
  },
  {
    uuid: "e7b1a3c2-4d56-4f89-b5a7-1f223311aa77",
    name: "Laila Ahmed",
    email: "laila.ahmed@example.com",
    phone: "+20 101 777 2233",
    birthdate: "1998-10-05",
    csoStatus: 3, // No CSO
    createdAt: "2025-09-01",
  },
  {
    uuid: "f2a8e9b3-1c4a-4d55-8b2e-9f2c77bba9d3",
    name: "Karim Nasser",
    email: "karim.nasser@example.com",
    phone: "+20 122 999 4455",
    birthdate: "1993-01-25",
    csoStatus: 1, // Passed
    createdAt: "2025-02-14",
  },
  {
    uuid: "a12f4b77-8d99-4c45-bb22-77a8f123ee44",
    name: "Yara Samir",
    email: "yara.samir@example.com",
    phone: "+20 112 555 2233",
    birthdate: "1995-05-19",
    csoStatus: 2, // Failed
    createdAt: "2025-07-25",
  },
  {
    uuid: "b55e88aa-2f33-44c9-822a-33a4a2a88900",
    name: "Mahmoud Fathy",
    email: "mahmoud.fathy@example.com",
    phone: "+20 100 333 6677",
    birthdate: "1992-09-01",
    csoStatus: 1, // Passed
    createdAt: "2025-05-30",
  },
  {
    uuid: "c44a33bb-1234-4a77-9b55-11a2c334ef88",
    name: "Aya Gamal",
    email: "aya.gamal@example.com",
    phone: "+20 111 777 1199",
    birthdate: "1999-11-11",
    csoStatus: 4, // N/A
    createdAt: "2025-08-08",
  },
  {
    uuid: "d99c77e2-44e1-4b88-8a55-22b3a1e9cc66",
    name: "Tamer Khalil",
    email: "tamer.khalil@example.com",
    phone: "+20 120 222 8877",
    birthdate: "1988-07-02",
    csoStatus: 3, // No CSO
    createdAt: "2025-04-22",
  },
  {
    uuid: "e88f55a3-66d2-45b8-9a77-44c3b7e2aa11",
    name: "Farah Mostafa",
    email: "farah.mostafa@example.com",
    phone: "+20 122 111 8899",
    birthdate: "1997-03-15",
    csoStatus: 1, // Passed
    createdAt: "2025-06-08",
  },
  {
    uuid: "f77b22c4-8e9f-4c11-8833-66a9b44fdd22",
    name: "Ahmed Magdy",
    email: "ahmed.magdy@example.com",
    phone: "+20 100 444 2211",
    birthdate: "1990-02-28",
    csoStatus: 2, // Failed
    createdAt: "2025-03-03",
  },
  {
    uuid: "a11e22f5-99b3-49d8-bb55-99f1a88cdd44",
    name: "Dina Farouk",
    email: "dina.farouk@example.com",
    phone: "+20 111 333 9999",
    birthdate: "1996-06-06",
    csoStatus: 4, // N/A
    createdAt: "2025-09-15",
  },
  {
    uuid: "b22a33f6-7c4b-4123-aa44-22f3c55ff887",
    name: "Ola Sherif",
    email: "ola.sherif@example.com",
    phone: "+20 120 555 4477",
    birthdate: "1994-01-14",
    csoStatus: 1, // Passed
    createdAt: "2025-07-18",
  },
  {
    uuid: "c33b44f7-9d5c-49a7-cc33-33a4e66aa998",
    name: "Mostafa Saad",
    email: "mostafa.saad@example.com",
    phone: "+20 122 666 7788",
    birthdate: "1991-12-09",
    csoStatus: 3, // No CSO
    createdAt: "2025-05-05",
  },
  {
    uuid: "d44c55f8-8e6d-4b9a-dd22-44b5f77bb889",
    name: "Reem Ehab",
    email: "reem.ehab@example.com",
    phone: "+20 100 888 6655",
    birthdate: "1998-09-27",
    csoStatus: 2, // Failed
    createdAt: "2025-08-28",
  },
  {
    uuid: "e55d66f9-7f7e-4caa-ee11-55c6g88cc990",
    name: "Ali Hamdy",
    email: "ali.hamdy@example.com",
    phone: "+20 111 444 5566",
    birthdate: "1990-10-30",
    csoStatus: 1, // Passed
    createdAt: "2025-04-14",
  },
  {
    uuid: "f66e77fa-6g8f-4dbb-ff00-66d7h99dd221",
    name: "Huda Said",
    email: "huda.said@example.com",
    phone: "+20 122 222 3344",
    birthdate: "1993-05-08",
    csoStatus: 4, // N/A
    createdAt: "2025-06-30",
  },
];

const getUserProfile = (req: Request, res: Response) => {
  const { 
    pageNumber = 1, 
    pageSize = 10,
    createdAtFrom,
    createdAtTo,
    csoStatuses = []
  } = req.body || {};

  // Start with all users
  let filteredUsers = [...users];

  // Apply date range filter
  if (createdAtFrom && createdAtTo) {
    filteredUsers = filteredUsers.filter(user => {
      const userDate = user.createdAt;
      return userDate >= createdAtFrom && userDate <= createdAtTo;
    });
  }

  // Apply CSO status filter
  if (csoStatuses && csoStatuses.length > 0) {
    filteredUsers = filteredUsers.filter(user => 
      csoStatuses.includes(user.csoStatus)
    );
  }

  // Calculate pagination
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredUsers.slice(startIndex, endIndex);

  const totalItems = filteredUsers.length;
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
  "POST /api/UserProfile": getUserProfile,
};