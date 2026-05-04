// Components
import {
  DialogOverlay,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// Types
import type { TJobOffer } from "@/types/TJobOffer";
import ApplyForm from "../ApplyForm";

type Props = {
  jobOffer: TJobOffer;
  setOpen: (value: boolean) => void;
};

const ApplyDialog = ({ jobOffer, setOpen }: Props) => {
  console.log(jobOffer, "jobOffer from dialog");

  return (
    <DialogOverlay className="bg-smoke-900/50">
      <DialogContent>
        <DialogHeader>
          <ApplyForm jobOffer={jobOffer}>
            <DialogTitle>
              <ApplyForm.Title />
            </DialogTitle>
            <DialogDescription className="flex w-full justify-center">
              <ApplyForm.Body setOpen={setOpen} />
            </DialogDescription>
          </ApplyForm>
        </DialogHeader>
      </DialogContent>
    </DialogOverlay>
  );
};

export default ApplyDialog;
