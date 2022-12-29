import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

export function post<Response>(
  url: string,
  data: object,
  options?: AxiosRequestConfig,
) {
  const body =
    options?.headers?.getContentType === "application/x-www-form-urlencoded"
      ? qs.stringify(data)
      : data;

  return axios.post<Response>(url, body, options);
}
