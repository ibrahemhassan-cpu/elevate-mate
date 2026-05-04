import { type ReactNode } from "react";

type Props = { children: ReactNode };

const NavigationBarLayout = ({ children }: Props) => {
  return (
    <nav className="relative h-14 w-full bg-linear-to-t from-[#e6e6e61a] to-[#49494933] p-4 shadow sm:h-22 sm:px-16 sm:py-6 lg:w-308 lg:rounded-lg lg:px-18 lg:shadow-none">
      <div className="flex h-full items-center justify-between gap-10 font-poppins text-lg font-normal text-smoke-900">
        {children}
      </div>
    </nav>
  );
};

export default NavigationBarLayout;
