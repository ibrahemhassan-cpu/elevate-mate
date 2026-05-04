// Components
import ApplyFormTitle from "./components/Title";
import ApplyFormBody from "./components/Form";
import type { TJobOffer } from "@/types/TJobOffer";
import type { ReactNode } from "react";
import ApplyFormContext from "./context/applyFormContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


// Types
type Props = { jobOffer: TJobOffer; children?: ReactNode };

const ApplyForm = ({ jobOffer, children }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ApplyFormContext.Provider value={jobOffer}>
        <div className="flex flex-col items-center gap-6">
          {children || (
            <>
              <ApplyFormTitle />
              <ApplyFormBody />
            </>
          )}
        </div>
      </ApplyFormContext.Provider>
    </LocalizationProvider>
  );
};

export default ApplyForm;

ApplyForm.Title = ApplyFormTitle;
ApplyForm.Body = ApplyFormBody;
