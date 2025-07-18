import { User } from "./types";

export const users: User[] = [
  {
    id: "usr_001",
    email: "alice@example.com",
    prediction: {
      stressLevel: "Highly Stressed",
      reasons: "High academic load and upcoming final exams.",
      remedies: "Suggests time management techniques and mindfulness exercises.",
      assessedDate: "2023-10-26T10:00:00Z",
    },
  },
  {
    id: "usr_002",
    email: "bob@example.com",
    prediction: {
      stressLevel: "Stressed",
      assessedDate: "2023-10-25T11:30:00Z",
    },
  },
  {
    id: "usr_003",
    email: "charlie@example.com",
    prediction: {
      stressLevel: "Normal",
      assessedDate: "2023-10-26T12:00:00Z",
    },
  },
  {
    id: "usr_004",
    email: "diana@example.com",
    prediction: {
      stressLevel: "Highly Stressed",
      reasons: "Family pressure to perform well and lack of sleep.",
      remedies: "Recommends communication with family and improving sleep hygiene.",
      assessedDate: "2023-10-24T09:00:00Z",
    },
  },
  {
    id: "usr_005",
    email: "ethan@example.com",
    prediction: {
      stressLevel: "Normal",
      assessedDate: "2023-10-26T14:00:00Z",
    },
  },
   {
    id: "usr_006",
    email: "fiona@example.com",
    prediction: {
      stressLevel: "Stressed",
      assessedDate: "2023-10-25T16:00:00Z",
    },
  },
];
