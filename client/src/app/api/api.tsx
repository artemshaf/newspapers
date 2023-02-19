import ky from "ky";
import { API_URLS } from "@utils";

export const api = ky.create({
  prefixUrl: API_URLS.base,
});
