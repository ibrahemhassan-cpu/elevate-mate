import type { TApplicantForm } from "@/types/TApplicant";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  icon: string;
  type: string;
  name: keyof TApplicantForm;
  placeholder: string;
};
const InputField = ({ icon, type, name, placeholder }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <div
            className={`flex w-full items-center gap-3 rounded-lg border border-smoke-200 bg-smoke-50 px-3 py-2 text-smoke-300 ${error && "border-2 border-danger-100"}`}
          >
            <img src={icon} alt="icon" className="size-4 text-primary-100" />
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              autoCorrect="off"
              spellCheck="false"
              autoCapitalize="off"
              autoComplete="off"
              className="flex-1 text-smoke-800 outline-none"
            />
          </div>
          {error && (
            <p className="p-1 text-xs text-danger-100">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default InputField;
