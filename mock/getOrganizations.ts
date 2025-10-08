// mock/getOrganizations.ts
import type { Request, Response } from "express";

// Mock organizations data
const organizations = [
  {
    id: 1,
    name: "Organization 1",
    code: "ORG001",
    type: "corporate",
    status: "active",
    region: "North",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Organization 2", 
    code: "ORG002",
    type: "individual",
    status: "active",
    region: "South",
    createdAt: "2024-02-20",
  },
  {
    id: 3,
    name: "Organization 3",
    code: "ORG003",
    type: "corporate",
    status: "inactive",
    region: "East",
    createdAt: "2024-03-10",
  },
  {
    id: 4,
    name: "Organization 4",
    code: "ORG004",
    type: "corporate",
    status: "active",
    region: "West",
    createdAt: "2024-01-05",
  },
  {
    id: 5,
    name: "Organization 5",
    code: "ORG005",
    type: "individual",
    status: "active",
    region: "Central",
    createdAt: "2024-04-12",
  },
  {
    id: 6,
    name: "Organization 6",
    code: "ORG006",
    type: "corporate",
    status: "pending",
    region: "North",
    createdAt: "2024-05-18",
  },
  {
    id: 7,
    name: "Organization 7",
    code: "ORG007",
    type: "individual",
    status: "active",
    region: "South",
    createdAt: "2024-03-22",
  },
  {
    id: 8,
    name: "Organization 8",
    code: "ORG008",
    type: "corporate",
    status: "active",
    region: "East",
    createdAt: "2024-02-08",
  },
  {
    id: 9,
    name: "Organization 9",
    code: "ORG009",
    type: "individual",
    status: "suspended",
    region: "West",
    createdAt: "2024-06-01",
  },
  {
    id: 10,
    name: "Organization 10",
    code: "ORG010",
    type: "corporate",
    status: "active",
    region: "Central",
    createdAt: "2024-04-30",
  },
];

const getOrganizations = (req: Request, res: Response) => {
    
  res.json(organizations);


};

export default {
  "GET /api/organizations": getOrganizations,
};