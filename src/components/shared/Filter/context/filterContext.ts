import type { TFilters } from "@/schemas/TFilters";
import { createContext, useContext } from "react";

// Types

const FilterContext = createContext<TFilters | null>(null);

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      "The filtering components must be rendered as a child of the Filter component.",
    );
  }
};

export default FilterContext;
