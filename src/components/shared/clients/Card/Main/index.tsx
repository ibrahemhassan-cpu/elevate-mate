import { useState } from "react";

// Components
import { Dialog } from "@/components/ui/dialog";

// Types
import { compareAsc, format } from "date-fns";
import type { TJobOffer } from "@/types/TJobOffer";
import MainHeader from "./Header";
import MainFooter from "./Footer";
import ApplyDialog from "../../ApplyDialog";

type Props = { jobOffer: TJobOffer };
const ClientCard = ({ jobOffer }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        href={`/careers/${jobOffer.documentId.toString()}`}
        className="space-y-3 capitalize"
      >
        <MainHeader title={jobOffer.title} jobOfferId={jobOffer.documentId} />
        <div>
          <p className="flex items-center gap-3 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
              className="aspect-auto w-4 shrink-0 text-primary-100"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <span>
              <strong>Job Location&nbsp;</strong>
              {jobOffer.location}
            </span>
          </p>
          <p className="flex items-center gap-3 text-sm">
            <img
              src={"/images/icons/calendar.png"}
              alt="user icon"
              className="aspect-auto w-4 shrink-0 px-[.12rem]"
            />
            <span>
              <strong>Expiry Date&nbsp;</strong>
              {format(jobOffer.expiration_date, "d MMMM yyyy")}
            </span>
            <span
              className={`text-xs text-danger-100 ${compareAsc(jobOffer.expiration_date, new Date()) === 1 ? "hidden" : "inline-flex"}`}
            >
              **Expired
            </span>
          </p>
        </div>
        <p className="line-clamp-1 font-inter text-sm font-normal text-smoke-600 first-letter:capitalize">
          {jobOffer.summary}
        </p>
      </a>
      <Dialog open={open} onOpenChange={setOpen}>
        <MainFooter />
        <ApplyDialog jobOffer={jobOffer} setOpen={setOpen} />
      </Dialog>
    </>
  );
};

export default ClientCard;
