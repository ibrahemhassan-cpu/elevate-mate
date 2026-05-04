// Utils
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadElement>;

const CardTitle = ({ children, className, ...otherAttributes }: Props) => {
  return (
    <h6
      className={cn(
        "font-inter text-base font-medium capitalize text-smoke-600",
        className,
      )}
      {...otherAttributes}
    >
      {children}
    </h6>
  );
};

export default CardTitle;
