// Components
import type { ReactNode } from "react";
import Card from "./Card";
import Paginator from "../Paginator";
import { getPreviousPage } from "../Paginator/helpers/getPreviousPage";
import { getNextPage } from "../Paginator/helpers/getNextPage";
import type { TPaginator } from "@/schemas/TPaginator";

type Props = {
  children: ReactNode;
  pagination?: TPaginator;
  setPagination?: (pagination: TPaginator) => void;
};

const Cards = ({ children, pagination, setPagination }: Props) => {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-3 lg:grid-cols-11 lg:gap-8">
      <hr className="text-smoke-900/10 lg:col-span-8 lg:col-start-2" />
      <div className="grid grid-cols-1 gap-1 lg:col-span-8 lg:col-start-2 lg:grid-cols-8 lg:gap-8">
        {children}
      </div>
      {pagination && setPagination && (
        <Paginator pagination={pagination}>
          <Paginator.Block
            onClick={() => getPreviousPage(pagination, setPagination)}
            disabled={pagination.page === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </Paginator.Block>
          <Paginator.Block
            onClick={() => getNextPage(pagination, setPagination)}
            disabled={pagination.page === pagination?.totalPagesNumber}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </Paginator.Block>
        </Paginator>
      )}
    </div>
  );
};

export default Cards;

Cards.Card = Card;
