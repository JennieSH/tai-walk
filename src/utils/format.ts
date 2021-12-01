import dayjs from "dayjs";

/**
 * @example
 * () => ""
 * (2021/11/11) => "2021/11/11"
 * (2021-11-11T00:00:00.000Z) => "2021/11/11"
 * (2021/11/11, "YYYY-MM-DD") => "2021-11-11"
 */
const formatTime = (time?: Date | string | number | null, formatType = "YYYY/MM/DD") => {
  if (!time) return "";

  return dayjs(time).format(formatType);
};

/**
 * @example
 * (10, "hello") => "hello"
 * (2, "hello") => "he ..."
 */
const formatTitle = (count: number, title?: string): string => {
  if (!title) return "";
  if (title.length < count) return title;

  return `${title.substr(0, count)} ...`;
};

export { formatTime, formatTitle };
