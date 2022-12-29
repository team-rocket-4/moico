import axios, { AxiosRequestConfig } from "axios";

export function get<Response>(
  url: string,
  query?: AxiosRequestConfig["params"],
  options?: AxiosRequestConfig,
) {
  return axios.get<Response>(url, {
    params: query,
    ...options,
  });
}
