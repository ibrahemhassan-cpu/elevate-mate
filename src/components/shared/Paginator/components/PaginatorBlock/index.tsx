// Utils
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const PaginatorBlock = ({
  children,
  className,
  onClick,
  ...otherAttributes
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex size-12 cursor-pointer items-center justify-center border border-smoke-500/50 bg-smoke-50 p-3 font-inter text-base font-normal text-smoke-500 hover:bg-smoke-150 hover:text-primary-100 disabled:cursor-default disabled:bg-smoke-150 disabled:text-smoke-500",
        className,
      )}
      {...otherAttributes}
    >
      {children}
    </button>
  );
};

export default PaginatorBlock;
