import { createContext, useContext } from "react";

// Types
import type { TJobOffer } from "@/types/TJobOffer";

const ApplyFormContext = createContext<TJobOffer | null>(null);

export const useApplyFormContext = () => {
  const jobOffer = useContext(ApplyFormContext);
  if (!jobOffer) {
    throw new Error(
      "The CardButton component must be rendered as a child of the CardFooter component.",
    );
  }
  return jobOffer;
};

export default ApplyFormContext;
