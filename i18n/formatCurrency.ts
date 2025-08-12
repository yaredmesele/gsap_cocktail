import currencyMap from "./currencyMap";

export function formatCurrency(amount: number, locale: string) {
  const currency = currencyMap[locale];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
