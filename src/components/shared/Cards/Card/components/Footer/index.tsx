// Components
import type { ReactNode } from "react";
import CardButton from "./components/Button";
import CardTrigger from "./components/DialogTrigger";

// Types
type Props = { children: ReactNode };

const CardFooter = ({ children }: Props) => {
  return (
    <section className="flex w-full items-center justify-between gap-3">
      {children}
    </section>
  );
};

export default CardFooter;

CardFooter.Button = CardButton;
CardFooter.Trigger = CardTrigger;
