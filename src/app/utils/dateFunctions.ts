import { formatDistance } from "date-fns";

export const getRelativeTimeFromNow = (
  date: Date | number,
  intialText: string = "Published"
): string => {
  return `${intialText} ${formatDistance(new Date(), date)} ago`;
};
