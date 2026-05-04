import { createContext, useContext } from "react";

const HeaderContext = createContext<boolean | null>(null);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error(
      "The Title and breadcrumbs components must be rendered as a child of the header component.",
    );
  }
};

export default HeaderContext;
