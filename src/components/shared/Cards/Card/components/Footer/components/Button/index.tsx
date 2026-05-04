// Utils
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const CardButton = ({ children, className, ...otherAttributes }: Props) => {
  return (
    <button
      className={cn(
        "min-h-9 min-w-16 self-end rounded px-2 py-1 font-inter text-sm capitalize lg:px-3 lg:py-2",
        className,
      )}
      {...otherAttributes}
    >
      {children && children}
    </button>
  );
};

export default CardButton;
