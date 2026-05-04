import {
  Controller,
  FormProvider,
  useForm,
  type SubmitHandler,
  type Resolver,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addHours, compareAsc } from "date-fns";
// Components
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// Constants
import { ACCEPTED_CV_TYPES, MAX_CV_SIZE } from "@/constants/main";
// Context
// Enums

import InputField from "./components/Input";
import { useState } from "react";
import { JobStartTimeIntervalsEnum } from "@/enums/JobStartIntervals.enum";
import { useApplyFormContext } from "../../context/applyFormContext";
import type { TApplicantForm } from "@/types/TApplicant";
import { ApplicantFormSchema } from "@/schemas/applicant.schema";
import { useApplyToJob } from "@/query/jobOffers";

type Props = { setOpen?: (value: boolean) => void };

const ApplyFormBody = ({ setOpen }: Props) => {
  const jobOffer = useApplyFormContext();
  const [fileTitle, setFileTitle] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutate: applyToJob, isPending } = useApplyToJob();

  const form = useForm<TApplicantForm>({
    resolver: zodResolver(ApplicantFormSchema) as Resolver<TApplicantForm>,
    defaultValues: {
      name: "",
      email: "",
      number: "",
      readyToJoin: undefined,
      contactTime: {
        from: new Date(),
        to: addHours(new Date(), 1),
      },
      cv: undefined,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isDirty, isValid },
  } = form;

  const submitApplicant: SubmitHandler<TApplicantForm> = async (data) => {
    setErrorMessage("");
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.number);
    formData.append("ready_to_join", data.readyToJoin);
    formData.append("contact_time_from", data.contactTime.from.toISOString());
    formData.append("contact_time_to", data.contactTime.to.toISOString());
    formData.append("jobOfferDocumentId", jobOffer.documentId);
    formData.append("cv", data.cv[0]);

    applyToJob(formData, {
      onSuccess: () => {
        setIsSuccess(true);
        setTimeout(() => {
          if (setOpen) setOpen(false);
        }, 3000);
      },
      onError: (error: any) => {
        console.log(error.response.data.error, "errorApply");
        setErrorMessage(
          error.response?.data?.error?.message ||
            "Something went wrong. Please try again later.",
        );
      },
    });
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-10 text-center animate-in fade-in duration-500">
        <div className="rounded-full bg-primary-100/10 p-6 text-primary-100 ring-8 ring-primary-100/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="font-grotesk text-3xl font-bold text-smoke-800">
            Success!
          </h3>
          <p className="text-lg text-smoke-600">
            Your application for{" "}
            <span className="font-medium text-primary-100">
              {jobOffer.title}
            </span>{" "}
            has been received.
          </p>
        </div>
        <p className="text-sm text-smoke-200">
          We'll review your CV and contact you soon.
        </p>
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <form
        className="flex w-full max-w-100 flex-col items-center gap-2 sm:gap-6"
        encType="multipart/form-data"
        onSubmit={handleSubmit(submitApplicant)}
      >
        <InputField
          icon={"/svgs/applicantsIcon.svg"}
          type="text"
          placeholder="Name"
          name="name"
        />
        <InputField
          icon={"/svgs/phoneIcon.svg"}
          type="text"
          placeholder="Mobile Phone Number"
          name="number"
        />
        <InputField
          icon={"/svgs/emailIcon.svg"}
          type="email"
          placeholder="Email"
          name="email"
        />
        <Controller
          control={control}
          name="readyToJoin"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <div className="w-full">
              <div
                className={`border-gray-300 focus:ring-primary-400 flex w-full items-center gap-3 rounded-lg border border-smoke-200 bg-smoke-50 px-3 py-2 text-smoke-800 focus:outline-none  ${errors.readyToJoin && "border-2 border-danger-100"}`}
              >
                <select
                  className="block w-full px-3 py-2 capitalize"
                  id="readyToJoin"
                  name="readyToJoin"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                >
                  <option value={undefined}>
                    Select when will you be ready to join our team
                  </option>
                  {JobStartTimeIntervalsEnum.options.map((dueRange) => (
                    <option
                      key={dueRange}
                      value={dueRange}
                      className={`flex-1 outline-none`}
                    >
                      {dueRange}
                    </option>
                  ))}
                </select>
              </div>
              {error && (
                <p className="p-1 text-xs text-danger-100">{error.message}</p>
              )}
            </div>
          )}
        />
        <div className="space-y-1 font-grotesk text-base capitalize text-smoke-600 max-w-full">
          <span className="font-medium">Preferred Contact Time</span>

          <div className="flex flex-col items-center gap-3 lg:flex-row max-w-full lg:justify-between">
            <Controller
              control={control}
              name="contactTime.from"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TimePicker
                    value={value}
                    onChange={onChange}
                    label="From"
                    className="max-w-full"
                  />
                  {error && (
                    <p className="pl-1 text-xs text-danger-100">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
            <Controller
              control={control}
              name="contactTime.to"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TimePicker value={value} onChange={onChange} label="To" />
                  {error && (
                    <p className="pl-1 text-xs text-danger-100">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="w-full space-y-2 rounded-lg border border-smoke-200 p-3">
          <label
            htmlFor="cv"
            className="flex w-full items-center justify-center gap-4 sm:justify-between"
          >
            <div className="hidden items-center gap-2 text-smoke-600 sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
              </svg>
              <span className="font-grotesk text-base font-medium">
                Your Resume
              </span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded border border-smoke-200 bg-smoke-50 px-6 py-2 text-smoke-600">
              <span className="font-grotesk text-base font-medium">
                Upload CV
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
              </svg>
            </div>
          </label>
          <input
            type="file"
            {...register("cv", {
              onChange: (e) => {
                if (
                  !ACCEPTED_CV_TYPES.includes(
                    e.target.files[0]?.type.toLowerCase(),
                  )
                ) {
                  setError("cv", {
                    message:
                      "This is not an accepted file format. Only [ *.pdf, *.doc, *.docx ] file types are allowed.",
                  });
                } else if (e.target.files[0]?.size > MAX_CV_SIZE) {
                  setError("cv", {
                    message: "File is too large. Max file size is 5MB.",
                  });
                } else {
                  setError("cv", { message: "" });
                  setFileTitle(getValues("cv")[0].name);
                }
              },
            })}
            id="cv"
            multiple={false}
            accept="application/pdf,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
          />
          {fileTitle ? (
            <>
              <p className="font-grotesk text-lg font-normal text-smoke-200">
                {fileTitle}
              </p>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="font-grotesk text-xs font-normal text-smoke-200">
                  Max file size: 5MB
                </p>
                <p className="font-grotesk text-xs font-normal text-smoke-200">
                  Only *.pdf, *.doc file types are allowed
                </p>
              </div>
              <p className="font-grotesk text-lg font-normal text-smoke-200">
                No File Selected
              </p>
            </>
          )}

          {errors.cv?.message && (
            <p className="p-1 text-xs text-danger-100">
              {errors?.cv?.message?.toString() || ""}
            </p>
          )}
        </div>
        {errorMessage && (
          <p className="pl-1 text-xs text-danger-100">{errorMessage}</p>
        )}
        <button
          className="flex h-10 cursor-pointer items-center justify-center rounded-full bg-primary-100 px-16 py-2 font-inter text-sm font-normal text-smoke-50 hover:bg-primary-200 disabled:cursor-default disabled:bg-smoke-300 sm:w-4/5 lg:w-full lg:px-4"
          type="submit"
          disabled={
            isPending ||
            !isValid ||
            compareAsc(jobOffer.expiration_date, new Date()) < 1
          }
        >
          {isPending ? (
            <div className="aspect-auto h-full animate-spin rounded-full border-2 border-smoke-100/20 border-l-primary-100"></div>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default ApplyFormBody;
