import { z } from "zod";
// Enums
import { FilterKeysEnum } from "@/enums/FilterKeysEnum";

export type TFilter = {
  id: number | string;
  name: string;
  [key: string]: string | number | boolean;
}[];
export type TFilters = Record<string, string | boolean | null>;
export type TFilterKey = z.infer<typeof FilterKeysEnum>;
