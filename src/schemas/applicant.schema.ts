import { z } from "zod";
// Constants
import {
  ACCEPTED_CV_TYPES,
  MAX_CV_SIZE,
  MIN_STRING_LENGTH,
} from "@/constants/main";
// Enums
import { JobStartTimeIntervalsEnum } from "@/enums/JobStartIntervals.enum";
import { phoneValidation, textValidation } from "@/helpers/regex";
// Helpers

export const ApplicantSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .trim()
    .min(MIN_STRING_LENGTH, "Field is required.")
    .regex(textValidation, {
      message: "Invalid text. Only letters and characters - _ are acceptable. ",
    }),
  email: z.string().email(),
  number: z // ADD INCLUSIVE INNTERNATIONAL PHONE NUMBER VALIDATION
    .string()
    .regex(phoneValidation, { message: "Invalid phone number." }),
  contactTime: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine((data) => data.to > data.from, {
      message: "End time must be after start time",
      path: ["to"],
    }),
  readyToJoin: JobStartTimeIntervalsEnum,
  jobOfferIds: z.array(z.string()),
  cv: z
    .any()
    .refine((fileList) => fileList?.length > 0, {
      message: "File is required",
    })
    .refine((fileList) => fileList?.[0]?.size <= MAX_CV_SIZE, {
      message: "Max file size is 5MB",
    })
    .refine(
      (fileList) =>
        ACCEPTED_CV_TYPES.includes(fileList?.[0]?.type?.toLowerCase()),
      {
        message: "Only [ *.pdf, *.doc ] file types are allowed.",
      },
    ),
});

export const ApplicantNoCvSchema = ApplicantSchema.omit({
  cv: true,
});
export const ApplicantsNoCvSchema = z.array(ApplicantNoCvSchema);
export const ApplicantFormSchema = ApplicantSchema.omit({
  id: true,
  jobOfferIds: true,
});
export const ApplicantRequestSchema = ApplicantSchema.omit({
  id: true,
  cv: true,
  jobOfferIds: true,
});
export const ApplicantDataSchema = ApplicantSchema.omit({
  cv: true,
  jobOfferIds: true,
});
export const ApplicantsDataSchema = z.array(ApplicantDataSchema);
