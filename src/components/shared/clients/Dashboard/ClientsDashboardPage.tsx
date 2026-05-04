// Components
import Cards from "@/components/shared/Cards";
import NoResult from "@/components/shared/NoResult";
// Types
import {
  useCountriesQuery,
  useJobOffers,
  useTitlesJobOffers,
} from "@/query/jobOffers";
import type { TPaginator } from "@/schemas/TPaginator";
import { UrlSearchParamsClientSchema } from "@/schemas/urlSearchParams.schema";
import type { TJobOffer } from "@/types/TJobOffer";
import { useEffect, useState } from "react";
import Filter from "../../Filter";
const ClientsDashboardPage = () => {
  const [urlSearchParams, setSearchParams] = useState<URLSearchParams | null>(
    null,
  );
  // VALIDATE SEARCH PARAMS & FILTER STATE
  const validatedSearchParams = UrlSearchParamsClientSchema.parse({
    title: urlSearchParams?.get("title"),
    location: urlSearchParams?.get("location"),
  });
  const [clientFilters, setClientFilters] = useState<any>(
    validatedSearchParams,
  );
  const [appliedFilters, setAppliedFilters] = useState<any>(
    validatedSearchParams,
  );
  // INItIALIZE PAGINATION OBJECT
  const [pagination, setPagination] = useState<TPaginator>({
    page: 1,
    totalItemsNumber: null,
    totalPagesNumber: null,
  });
  console.log(pagination);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filters = UrlSearchParamsClientSchema.parse({
      title: params.get("title"),
      location: params.get("location"),
    });
    setSearchParams(params);
    setClientFilters(filters);
    setAppliedFilters(filters);
  }, []);

  const {
    data: jobOffers,
    isLoading,
    isFetching,
  } = useJobOffers({
    ...appliedFilters,
    page: pagination.page,
    pageSize: 10,
  });
  const { data: titlesJobOffers } = useTitlesJobOffers();
  const { data: countries } = useCountriesQuery();

  useEffect(() => {
    if (!jobOffers) return;
    setPagination({
      ...pagination,
      totalItemsNumber: jobOffers.meta.pagination.total,
      totalPagesNumber: jobOffers.meta.pagination.pageCount,
    });
  }, [jobOffers, isLoading, isFetching]);

  return (
    <main className="w-full space-y-8 p-4 sm:px-16 lg:pr-0 lg:pt-11">
      <Filter>
        <Filter.Main
          filters={clientFilters}
          pagination={pagination}
          setPagination={setPagination}
          onSearch={() => {
            setAppliedFilters(clientFilters);
          }}
          onClear={() => {
            const defaultFilters = {
              title: "",
              location: "",
            };
            setClientFilters(defaultFilters);
            setAppliedFilters(defaultFilters);
            window.history.pushState({}, "", window.location.pathname);
            setSearchParams(new URLSearchParams(""));
          }}
        >
          <Filter.Main.Dropdown
            icon={"/svgs/searchIcon.svg"}
            placeholder="Job Title"
            filterKeys={["title"]}
            dropdownList={[
              {
                name: "All",
                id: "",
              },
              ...(titlesJobOffers?.map((title: any) => ({
                name: title,
                id: title,
              })) || []),
            ]}
            filters={clientFilters}
          >
            <Filter.Main.Dropdown.RadioGroup
              filterKey="title"
              dropdownList={[
                {
                  name: "All",
                  id: "",
                },
                ...(titlesJobOffers?.map((title: any) => ({
                  name: title,
                  id: title,
                })) || []),
              ]}
              filters={clientFilters}
              setFilters={setClientFilters}
            />
          </Filter.Main.Dropdown>
          <Filter.Main.Dropdown
            icon={"/svgs/locationIcon.svg"}
            placeholder="Job Location"
            filterKeys={["location"]}
            dropdownList={[
              {
                name: "All",
                id: "",
              },
              ...(countries?.map((country: any) => ({
                name: country.name,
                id: country.name,
              })) || []),
            ]}
            filters={clientFilters}
          >
            <Filter.Main.Dropdown.RadioGroup
              filterKey="location"
              dropdownList={[
                {
                  name: "All",
                  id: "",
                },
                ...(countries?.map((country: any) => ({
                  name: country.name,
                  id: country.name,
                })) || []),
              ]}
              filters={clientFilters}
              setFilters={setClientFilters}
            />
          </Filter.Main.Dropdown>
        </Filter.Main>
      </Filter>

      {isLoading || isFetching ? (
        <Cards>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Cards.Card key={index}>
                <Cards.Card.Dummy />
              </Cards.Card>
            ))}
        </Cards>
      ) : !jobOffers?.data || jobOffers?.data?.length === 0 ? (
        <NoResult label="Job Offers" />
      ) : (
        <Cards pagination={pagination} setPagination={setPagination}>
          {jobOffers?.data?.map((jobOffer: TJobOffer) => (
            <Cards.Card key={jobOffer.id}>
              <Cards.Card.ClientMain jobOffer={jobOffer} />
            </Cards.Card>
          ))}
        </Cards>
      )}
    </main>
  );
};

export default ClientsDashboardPage;
