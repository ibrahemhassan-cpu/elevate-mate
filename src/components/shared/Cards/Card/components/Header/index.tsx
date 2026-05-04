// Components
import CardTitle from "./components/Title";
import CardApplicantsCount from "./components/ApplicantsCount";
import type { ReactNode } from "react";

type Props = { children: ReactNode };

const CardHeader = ({ children }: Props) => {
  return (
    <section className="flex w-full items-center justify-between gap-3">
      {children}
    </section>
  );
};

export default CardHeader;

CardHeader.Title = CardTitle;
CardHeader.Count = CardApplicantsCount;
