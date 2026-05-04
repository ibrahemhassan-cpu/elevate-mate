import { z } from "zod";
// Schemas
import {
  ApplicantDataSchema,
  ApplicantFormSchema,
  ApplicantRequestSchema,
  ApplicantsDataSchema,
} from "@/schemas/applicant.schema";
import type { ApplicantSchema } from "@/schemas/applicant.schema";

export type TApplicant = z.infer<typeof ApplicantSchema>;
export type TApplicantForm = z.infer<typeof ApplicantFormSchema>;
export type TApplicantData = z.infer<typeof ApplicantDataSchema>;
export type TApplicantsData = z.infer<typeof ApplicantsDataSchema>;
export type TApplicantRequest = z.infer<typeof ApplicantRequestSchema>;
