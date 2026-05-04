import type { TFilters } from "@/schemas/TFilters";
import { createContext, useContext } from "react";

// Types

const FilterMainContext = createContext<TFilters | null>(null);

export const useFilterMainContext = () => {
  const context = useContext(FilterMainContext);

  if (!context) {
    throw new Error(
      "The filtering components must be rendered as a child of the Filter component.",
    );
  }
};

export default FilterMainContext;
