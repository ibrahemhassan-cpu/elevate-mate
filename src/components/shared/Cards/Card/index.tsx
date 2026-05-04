// Components
import ClientCard from "../../clients/Card/Main";
import type { ReactNode } from "react";
import Dummy from "./components/Dummy";

type Props = { children: ReactNode };

const Card = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-md bg-smoke-50 p-4 sm:col-span-4">
      {children}
    </div>
  );
};

export default Card;

Card.ClientMain = ClientCard;
Card.Dummy = Dummy;
