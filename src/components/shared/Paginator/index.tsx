import PaginatorBlock from "./components/PaginatorBlock";
import { PAGE_SIZE } from "@/constants/main";

import PaginatorContext from "./context/paginatorContext";
import type { TPaginator } from "@/schemas/TPaginator";
import type { ReactNode } from "react";

type Props = { pagination: TPaginator; children: ReactNode };

const Paginator = ({ pagination, children }: Props) => {
  return (
    <PaginatorContext.Provider value={pagination}>
      <div className="flex w-full flex-col items-end justify-between gap-8 sm:flex-row sm:items-center lg:col-span-8 lg:col-start-2 lg:grid-cols-8">
        {pagination.totalItemsNumber && (
          <p className="font-inter text-base font-medium text-smoke-500">
            <span>{`Showing `}</span>
            <span className="font-bold text-primary-100">
              {`( ${PAGE_SIZE < pagination.totalItemsNumber ? (pagination.page - 1) * PAGE_SIZE + 1 : 1} ${(pagination.page - 1) * PAGE_SIZE + 1 >= pagination.totalItemsNumber ? "" : `to ${pagination.page * PAGE_SIZE < pagination.totalItemsNumber ? pagination.page * PAGE_SIZE : pagination.totalItemsNumber}`} ) `}
            </span>
            <span>{`of ${pagination.totalItemsNumber} available jobs`}</span>
          </p>
        )}
        <div className="flex rounded border border-smoke-500/50">
          {children}
        </div>
      </div>
    </PaginatorContext.Provider>
  );
};

export default Paginator;

Paginator.Block = PaginatorBlock;
