export * from "./date";

export const getKey = (count = 2): string => {
  let result = "";

  for (let index = 0; index < count; index++) {
    result += (Math.random() * 10000).toString(36).substring(7);
  }

  return result;
};

export const getImgFromBaseUrl = (src: string) =>
  import.meta.env.BASE_URL + src;
