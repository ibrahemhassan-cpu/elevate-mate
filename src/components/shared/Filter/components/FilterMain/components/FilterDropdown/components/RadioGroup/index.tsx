import {
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import type {
  TAdminEmployersUrlSearchParams,
  TAdminUrlSearchParams,
  TClientUrlSearchParams,
} from "@/types/TUrlSearchParams";

type Props<T> = {
  filterKey: keyof T;
  dropdownList: {
    id: number | string;
    name: string;
    [key: string]: string | number | boolean;
  }[];
  filters: T;
  setFilters: (filters: T) => void;
};

const RadioDropdown = <
  T extends
    | TClientUrlSearchParams
    | TAdminEmployersUrlSearchParams
    | TAdminUrlSearchParams,
>({
  filterKey,
  dropdownList,
  filters,
  setFilters,
}: Props<T>) => {
  const selectedValue = filters[filterKey] || "";
  const matchedItem = dropdownList.find(
    (item) =>
      String(item.id).toLowerCase() === String(selectedValue).toLowerCase(),
  );
  const normalizedValue = matchedItem ? String(matchedItem.id) : "";
  return (
    <DropdownMenuRadioGroup
      value={normalizedValue}
      onValueChange={(value) => setFilters({ ...filters, [filterKey]: value })}
    >
      {dropdownList.length ? (
        dropdownList.map((item) => (
          <DropdownMenuRadioItem
            key={item.id}
            value={item.id as string}
            className="capitalize"
          >
            {item.name}
          </DropdownMenuRadioItem>
        ))
      ) : (
        <DropdownMenuItem>No available filters</DropdownMenuItem>
      )}
    </DropdownMenuRadioGroup>
  );
};

export default RadioDropdown;
