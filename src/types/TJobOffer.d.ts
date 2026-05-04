import { z } from "zod";
// Schemas
export type TJobOffer = {
  title: string;
  type: "full time" | "part time" | "intern" | "consultant";
  location: string;
  isArchived: boolean;
  isPublished: boolean;
  id: string;
  documentId: string;
  employerId: string;
  jobCode: string;
  level: string;
  summary: string;
  description: string;
  qualifications: string;
  skills: string;
  salary: {
    currency: "USD" | "EUR" | "QAR";
    min?: string | undefined;
    max?: string | undefined;
  };
  expiration_date: Date;
  totalApplicantsCount: number;
  createdAt: Date;
  createdBy: string;
  extraFields?: { value: string; label: string }[] | undefined;
};

export type TJobOffers = TJobOffer[];
export type TJobOfferRequest = Omit<TJobOffer, "id">;
export type TJobOfferForm = Omit<
  TJobOffer,
  "id" | "jobCode" | "isArchived" | "createdAt" | "totalApplicantsCount"
>;
export type JobOfferKeys = NestedKeys<TJobOffer>;
