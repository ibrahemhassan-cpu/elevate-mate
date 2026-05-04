// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Types
import RadioDropdown from "./components/RadioGroup";
import { cn } from "@/lib/utils";
import type { TFilterKey, TFilters } from "@/schemas/TFilters";
import type { ReactNode } from "react";

type Props = {
  icon: string;
  className?: string;
  placeholder: string;
  filterKeys: TFilterKey[];
  dropdownList?: {
    id: number | string;
    name: string;
    [key: string]: string | number | boolean;
  }[];
  filters: TFilters;
  children: ReactNode;
};

const FilterDropdown = ({
  icon,
  className,
  placeholder,
  filterKeys,
  dropdownList,
  filters,
  children,
}: Props) => {
  let selectedValueLabel = "";
  if (dropdownList) {
    const value = filters[filterKeys[0]] as string;
    const selectedItem = dropdownList.find(
      (item) => String(item.id).toLowerCase() === String(value).toLowerCase(),
    );
    if (selectedItem && selectedItem.name !== "All") {
      selectedValueLabel = selectedItem.name;
    }
  } else {
    filterKeys.forEach((key) => {
      switch (key) {
        case "isArchived":
          if (filters[key]) selectedValueLabel += "Archived, ";
          break;
        case "isPublished":
          if (filters[key]) selectedValueLabel += "Published, ";
          break;
        case "isExpired":
          if (filters[key]) selectedValueLabel += "Expired, ";
          break;
        default:
          break;
      }
    });
    if (selectedValueLabel.length)
      selectedValueLabel = selectedValueLabel.slice(
        0,
        selectedValueLabel.length - 2,
      );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        asChild
        className={cn(
          "col-span-full rounded bg-smoke-100 p-3 transition-colors hover:bg-primary-100/50 lg:col-span-1",
          className,
        )}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <img src={icon} alt="dropdown icon" />
            <span className="truncate whitespace-nowrap capitalize">
              {selectedValueLabel === "" ? placeholder : selectedValueLabel}
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        onWheel={(e) => e.stopPropagation()}
        className="max-h-96 w-96 overflow-y-auto"
      >
        <DropdownMenuLabel>{placeholder}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;

FilterDropdown.RadioGroup = RadioDropdown;
