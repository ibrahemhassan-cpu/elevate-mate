import { type HTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
type Props = HTMLAttributes<HTMLHeadingElement>;

function PageTitle({ className, children, ...otherAttributes }: Props) {
  return (
    <h1
      className={cn(
        "py-4 text-lg font-grotesk font-bold text-smoke-700 sm:text-5xl lg:text-center lg:text-6xl text-center",
        className,
      )}
      {...otherAttributes}
    >
      {children}
    </h1>
  );
}

export default PageTitle;
