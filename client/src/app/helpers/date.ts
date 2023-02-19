export const getFullRussianDate = (date = new Date()): string =>
  new Intl.DateTimeFormat("ru", {
    dateStyle: "long",
  }).format(new Date(date));
