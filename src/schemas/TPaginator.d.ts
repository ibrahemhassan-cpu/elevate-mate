import { DocumentSnapshot } from "firebase/firestore";

export type TPaginator = {
  page: number;
  totalItemsNumber: number | null;
  totalPagesNumber: number | null;
};
