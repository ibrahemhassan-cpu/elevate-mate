// Components
import type { ReactNode } from "react";
import FilterDropdown from "./components/FilterDropdown";

// Context
import FilterMainContext from "./context/filterMain";
import type { TFilters } from "@/schemas/TFilters";
import type { TPaginator } from "@/schemas/TPaginator";

// Types

type Props = {
  filters: TFilters;
  pagination: TPaginator;
  setPagination: (pagination: TPaginator) => void;
  onClear: () => void;
  onSearch?: () => void;
  children: ReactNode;
};

const FilterMain = ({
  filters,
  pagination,
  setPagination,
  onClear,
  onSearch,
  children,
}: Props) => {
  const filter = () => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        searchParams.set(key, String(value));
      } else {
        searchParams.delete(key);
      }
    });

    const newUrl = `${window.location.pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
    window.history.pushState({}, "", newUrl);

    if (onSearch) onSearch();

    setPagination({
      ...pagination,
      page: 1,
    });
  };

  return (
    <FilterMainContext.Provider value={filters}>
      <span className="hidden whitespace-nowrap p-3 font-grotesk text-lg font-medium text-smoke-700 lg:col-span-1 lg:block">
        Filter By
      </span>
      <div className="col-span-1 grid grid-cols-2 flex-col flex-wrap gap-2 lg:col-span-8">
        {children}
      </div>
      <div className="text-inter col-span-1 flex items-stretch justify-center gap-2 lg:col-span-2">
        <button
          onClick={onClear}
          className="text-inter flex max-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-danger-100 p-3 text-sm font-medium text-smoke-50 hover:bg-danger-200"
        >
          <span>Clear</span>
        </button>
        <button
          onClick={filter}
          className="text-inter flex max-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary-100 p-3 text-sm font-medium text-smoke-50 hover:bg-primary-200"
        >
          <svg
            height="24px"
            width="24px"
            viewBox="0 -960 960 960"
            fill="currentColor"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <span>Search</span>
        </button>
      </div>
    </FilterMainContext.Provider>
  );
};

export default FilterMain;

FilterMain.Dropdown = FilterDropdown;
