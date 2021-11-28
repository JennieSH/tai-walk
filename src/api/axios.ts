import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader";
import type { ApiParameter } from "./types";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: getAuthorizationHeader()
});

const apiGet = async <T>(url: string, params?: ApiParameter): Promise<T> => {
  const searchParams = new URLSearchParams({
    $format: "JSON",
    ...params
  }).toString();

  const response = await axiosApi(`${url}?${searchParams}`);

  if (response.status === 200) {
    return response.data;
  }

  console.log(response);
  throw new Error(response.statusText);
};

export { apiGet };
