import { z } from "zod";
// Schemas
import {
  UrlSearchParamsAdminEmployersSchema,
  UrlSearchParamsAdminSchema,
  UrlSearchParamsClientSchema,
  URLSearchParamsSchema,
} from "@/schemas/urlSearchParams.schema";

export type TClientUrlSearchParams = z.infer<
  typeof UrlSearchParamsClientSchema
>;
export type TAdminUrlSearchParams = z.infer<typeof UrlSearchParamsAdminSchema>;
export type TAdminEmployersUrlSearchParams = z.infer<
  typeof UrlSearchParamsAdminEmployersSchema
>;
export type TUrlSearchParams = z.infer<typeof URLSearchParamsSchema>;
