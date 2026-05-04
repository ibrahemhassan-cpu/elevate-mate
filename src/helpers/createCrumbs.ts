type TBreadCrumbs = { label: string; value: string }[];

export const createCrumbs = (pathname: string, title?: string): TBreadCrumbs => {
  const urlArray = pathname
    .split("/")
    .filter((part) => part.trim() !== "")
    .filter((part) => part !== "admin");

  const crumbs: TBreadCrumbs = [
    {
      label: "Home",
      value: "/",
    },
    ...urlArray.map((part, index) => {
      const url = "/" + urlArray.slice(0, index + 1).join("/");

      const isLast = title && index === urlArray.length - 1;

      return {
        label: isLast
          ? title!
          : part.charAt(0).toUpperCase() + part.slice(1),
        value: url,
      };
    }),
  ];

  return crumbs;
};