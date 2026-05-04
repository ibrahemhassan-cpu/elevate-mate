import React from 'react';
import { useJobOffer } from '@/query/jobOffers';
import ApplyForm from "@/components/shared/clients/ApplyForm";
import PageHeader from "@/components/shared/Header";
import PageBreadCrumbs from "@/components/shared/Header/pageBreadCrumbs";
import { compareAsc, format } from "date-fns";
import parse from "html-react-parser";

interface Props {
  id: string;
  pathname: string;
}

const JobOfferDetail: React.FC<Props> = ({ id, pathname }) => {
  const { data: jobOffer, isLoading, isError } = useJobOffer(id);

  if (isLoading) {
    return (
      <div className="flex w-full flex-1 flex-col items-center sm:my-8 lg:my-20">
        <PageHeader>
           <div className="h-8 w-64 bg-gray-200 animate-pulse rounded"></div>
        </PageHeader>
        <main className="grid w-full grid-cols-1 gap-3 p-4 sm:px-16 lg:grid-cols-12 lg:gap-10 lg:pt-11">
          <section className="space-y-6 rounded bg-gray-50 px-9 py-12 lg:col-span-7 lg:space-y-8 animate-pulse">
            <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
            <div className="space-y-4 pt-8">
               <div className="h-4 w-full bg-gray-200 rounded"></div>
               <div className="h-4 w-full bg-gray-200 rounded"></div>
               <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-4 pt-8">
               <div className="h-4 w-full bg-gray-200 rounded"></div>
               <div className="h-4 w-full bg-gray-200 rounded"></div>
               <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </section>
          <aside className="h-fit space-y-6 rounded bg-gray-50 px-4 py-8 shadow lg:col-span-5 lg:px-8 animate-pulse">
             <div className="h-64 bg-gray-200 rounded"></div>
          </aside>
        </main>
      </div>
    );
  }

  if (isError || !jobOffer) {
    return (
      <div className="flex w-full flex-1 flex-col items-center sm:my-8 lg:my-20">
        <PageHeader>
          <PageBreadCrumbs pathname={pathname} title="Job Not Found" />
        </PageHeader>
        <main className="flex flex-col items-center justify-center w-full p-4 py-20 text-center">
           <div className="max-w-md">
            <h2 className="text-4xl font-bold text-primary-100 mb-4">Job offer not found</h2>
            <p className="text-smoke-600 text-lg mb-8">
              We couldn't find the job offer you're looking for. It might have been closed or the link is incorrect.
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center px-8 py-3 bg-primary-100 text-smoke-50 font-medium rounded-lg hover:bg-primary-200 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Back to Career Opportunities
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center sm:my-8 lg:my-20">
      <PageHeader>
        <PageBreadCrumbs pathname={pathname} title={jobOffer.title} />
      </PageHeader>
      <main className="grid w-full grid-cols-1 gap-3 p-4 sm:px-16 lg:grid-cols-12 lg:gap-10 lg:pt-11">
        <section className="space-y-6 rounded bg-smoke-200/10 px-9 py-12 lg:col-span-7 lg:space-y-8">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex w-full items-baseline gap-4 flex-wrap">
              <h2 className="font-inter text-4xl font-medium capitalize text-primary-100">
                {jobOffer.title}
              </h2>
              <p className="flex items-center gap-3 text-sm">
                <img
                  src="/images/icons/calendar.png"
                  alt="calendar icon"
                  className="aspect-auto h-full max-h-4 shrink-0 px-[.12rem]"
                />
                <span>
                  <strong>Expiry Date&nbsp;</strong>
                  {jobOffer.expiration_date
                    ? format(new Date(jobOffer.expiration_date), "d MMMM yyyy")
                    : "N/A"}
                </span>
                <span
                  className={`text-xs text-danger-100 ${
                    compareAsc(new Date(jobOffer.expiration_date || new Date()), new Date()) === 1
                      ? "hidden"
                      : "inline-flex"
                  }`}
                >
                  **Expired
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-9 w-full">
                <div className="flex items-center gap-2 text-primary-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"></path>
                  </svg>
                  <span className="font-inter text-lg font-medium capitalize text-smoke-600">
                    {jobOffer.level} - {jobOffer.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-primary-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"></path>
                  </svg>
                  <span className="font-inter text-lg font-medium capitalize text-smoke-600">
                    {jobOffer.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-9">
                <div className="flex items-center gap-2 text-primary-100">
                  <span className="font-inter text-lg capitalize text-smoke-600">
                    <strong>Expected Salary Ranges:&nbsp;</strong>
                    {jobOffer.salary?.min
                      ? `${jobOffer.salary.min} ${jobOffer.salary.currency} - `
                      : ""}
                    {jobOffer.salary?.max
                      ? `${jobOffer.salary.max} ${jobOffer.salary.currency}`
                      : ""}
                    {!jobOffer.salary?.min && !jobOffer.salary?.max && "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 space-y-6 lg:space-y-8">
            {jobOffer.description && (
              <div>
                <h4 className="text-2xl font-medium text-smoke-700 mb-2">Description</h4>
                <div className="prose prose-smoke max-w-none">
                  {parse(jobOffer.description)}
                </div>
              </div>
            )}
            {jobOffer.qualifications && (
              <div>
                <h4 className="text-2xl font-medium text-smoke-700 mb-2">Qualifications</h4>
                <div className="prose prose-smoke max-w-none">
                  {parse(jobOffer.qualifications)}
                </div>
              </div>
            )}
            {jobOffer.skills && (
              <div>
                <h4 className="text-2xl font-medium text-smoke-700 mb-2">Skills</h4>
                <div className="prose prose-smoke max-w-none">
                  {parse(jobOffer.skills)}
                </div>
              </div>
            )}
            {jobOffer.extraFields?.length
              ? jobOffer.extraFields.map((field, idx) => (
                  <div key={idx}>
                    <h4 className="text-2xl font-medium text-smoke-700 mb-2">
                      {field.label}
                    </h4>
                    <div className="prose prose-smoke max-w-none">
                      {parse(field.value)}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </section>

        <aside className="h-fit space-y-6 rounded bg-smoke-50/60 px-4 py-8 shadow lg:col-span-5 lg:px-8">
          <ApplyForm jobOffer={jobOffer} />
        </aside>
      </main>
    </div>
  );
};

export default JobOfferDetail;
