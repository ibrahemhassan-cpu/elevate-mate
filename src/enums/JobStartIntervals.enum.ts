import { z } from "zod";

export const JobStartTimeIntervalsEnum = z.enum(
  ["Immediately", "In less than a Month", "In 2 Month"],
  {
    message: "Please select a valid interval.",
  },
);
