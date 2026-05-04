import type { TPaginator } from "@/schemas/TPaginator";

export const getNextPage = <T extends TPaginator>(
  pagination: T,
  setPagination: (pagination: T) => void,
) => {
  if (pagination.page === pagination.totalPagesNumber) return;
  setPagination({
    ...pagination,
    page: pagination.page + 1,
    direction: "next",
  });
};
