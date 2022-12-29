import axios, { AxiosRequestConfig } from "axios";

export async function post<Response>(
  url: string,
  body: object | string,
  options?: AxiosRequestConfig,
) {
  return axios.post<Response>(url, body, options);
}
