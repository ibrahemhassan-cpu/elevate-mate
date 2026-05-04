import type { TPaginator } from "@/schemas/TPaginator";
import { createContext, useContext } from "react";

const PaginatorContext = createContext<TPaginator | null>(null);

export const usePaginatorContext = () => {
  const context = useContext(PaginatorContext);

  if (!context) {
    throw new Error(
      "The PaginatorBlock component must be rendered as a child of the Paginator component.",
    );
  }
};

export default PaginatorContext;
