import { createCrumbs } from "../../../helpers/createCrumbs";

type Props = {
  pathname: string;
  title?: string;
};

const PageBreadCrumbs = ({ pathname, title }: Props) => {
  const crumbs = createCrumbs(pathname, title);
  console.log(pathname, "pathname");
  console.log(crumbs, "crumbs");

  return (
    <ul className="hidden items-center gap-1 sm:flex">
      {crumbs?.map((crumb, index) => {
        const isActive = pathname === crumb.value;
        const isHome = index === 0;

        return (
          <li key={index} className="flex items-center gap-1 capitalize">
            {/* separator (skip first item) */}
            {!isHome && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            )}

            <a
              href={crumb.value}
              className={isActive ? "font-bold  block" : ""}
            >
              <p>
                {/* HOME ICON ONLY */}
                {isHome ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="currentColor"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                ) : (
                  crumb.label
                )}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageBreadCrumbs;
