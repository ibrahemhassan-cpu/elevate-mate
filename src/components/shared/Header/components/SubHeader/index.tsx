import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

function SubHeader({ className, children, ...otherAttributes }: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-between gap-4 border-t border-y-smoke-900/15 py-6 font-grotesk lg:grid lg:grid-cols-12",
        className,
      )}
      {...otherAttributes}
    >
      {children}
    </div>
  );
}

export default SubHeader;
