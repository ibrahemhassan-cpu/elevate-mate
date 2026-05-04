import type { TPaginator } from "@/schemas/TPaginator";

export const getPreviousPage = <T extends TPaginator>(
  pagination: T,
  setPagination: (pagination: T) => void,
) => {
  if (pagination.page === 1) return;
  setPagination({
    ...pagination,
    page: pagination.page - 1,
    direction: "previous",
  });
};
