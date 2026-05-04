// Components
import { DialogTrigger } from "@/components/ui/dialog";

// Utils
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const CardTrigger = ({ children, className, ...otherAttributes }: Props) => {
  return (
    <DialogTrigger
      className={cn(
        "min-h-9 min-w-24 self-end rounded px-7 py-2 font-inter text-sm capitalize sm:px-3",
        className,
      )}
      {...otherAttributes}
    >
      {children && children}
    </DialogTrigger>
  );
};

export default CardTrigger;
