// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

type Props = {
  navigationLinks: Record<
    string,
    { label: string; value: string; onClick?: () => void }
  >;
};

const NavigationDropdown = ({ navigationLinks }: Props) => {
  const keys = Object.keys(navigationLinks);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="inline-flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={20}
        align="center"
        className="w-screen border-none p-9"
      >
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {keys.map((key) => (
            <DropdownMenuItem
              key={key}
              className="p-5 pl-0 font-poppins text-lg capitalize text-[#222222]"
            >
              {navigationLinks[key].value === "" ? (
                <button onClick={navigationLinks[key].onClick}>
                  {navigationLinks[key].label}
                </button>
              ) : (
                <a href={navigationLinks[key].value}>
                  {navigationLinks[key].label}
                </a>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationDropdown;
