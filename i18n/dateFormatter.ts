export function formatDate(
  date: Date | string,
  locale: string,
  options?: Intl.DateTimeFormatOptions
) {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
    ...options,
  }).format(dateObj);
}
