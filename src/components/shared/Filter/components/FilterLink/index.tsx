import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};
const FilterLink = ({ href, onClick, className, children }: Props) => {
  return href ? (
    <a
      href={href}
      className={cn(
        "text-inter flex items-center justify-center gap-2 rounded-lg bg-smoke-50 p-3 text-sm font-medium text-primary-100 drop-shadow hover:drop-shadow-md lg:col-span-2 lg:col-start-10",
        className,
      )}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={cn(
        "text-inter flex items-center justify-center gap-2 rounded-lg bg-smoke-50 p-3 text-sm font-medium text-primary-100 drop-shadow hover:drop-shadow-md lg:col-span-2 lg:col-start-10",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default FilterLink;
