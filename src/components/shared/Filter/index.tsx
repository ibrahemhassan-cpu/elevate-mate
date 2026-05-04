// Context
import FilterContext from "./context/filterContext";

// Types

import FilterLink from "./components/FilterLink";
import FilterMain from "./components/FilterMain";
import type { ReactNode } from "react";

type Props = { children: ReactNode };

const Filter = ({ children }: Props) => {
  return (
    <FilterContext.Provider value={null}>
      <div className="grid w-full grid-cols-1 items-center gap-3 lg:grid-flow-row-dense lg:grid-cols-11 lg:items-start lg:gap-8">
        {children}
      </div>
    </FilterContext.Provider>
  );
};

export default Filter;

Filter.Main = FilterMain;
Filter.Link = FilterLink;
