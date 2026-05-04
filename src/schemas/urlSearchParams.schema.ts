import { z } from "zod";

export const UrlSearchParamsAdminSchema = z.object({
  title: z
    .string()
    .nullable()
    .catch(null)
    .transform((x) => x ?? ""),
  // location: z
  //   .string()
  //   .nullable()
  //   .catch(null)
  //   .transform((x) => x ?? ""),
  // employer: z
  //   .string()
  //   .nullable()
  //   .catch(null)
  //   .transform((x) => x ?? ""),
  // industry: z
  //   .string()
  //   .nullable()
  //   .catch(null)
  //   .transform((x) => x ?? ""),
  isArchived: z
    .string()
    .toLowerCase()
    .transform((x) => x === "true")
    .pipe(z.boolean())
    .nullable()
    .catch(null),
  isPublished: z
    .string()
    .toLowerCase()
    .transform((x) => x === "true")
    .pipe(z.boolean())
    .nullable()
    .catch(null),
  isExpired: z
    .string()
    .toLowerCase()
    .transform((x) => x === "true")
    .pipe(z.boolean())
    .nullable()
    .catch(null),
});

export const UrlSearchParamsAdminEmployersSchema = z.object({
  employer: z
    .string()
    .nullable()
    .catch(null)
    .transform((x) => x ?? ""),
  industry: z
    .string()
    .nullable()
    .catch(null)
    .transform((x) => x ?? ""),
});

export const UrlSearchParamsClientSchema = z.object({
  title: z
    .string()
    .nullable()
    .catch(null)
    .transform((x) => x ?? ""),
  location: z
    .string()
    .nullable()
    .catch(null)
    .transform((x) => x ?? ""),
});

export const URLSearchParamsSchema = z.union([
  UrlSearchParamsAdminSchema,
  UrlSearchParamsAdminEmployersSchema,
  UrlSearchParamsClientSchema,
]);
