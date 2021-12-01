import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader";
import type { ApiParameter } from "./types";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: getAuthorizationHeader(),
  validateStatus: status => status >= 200 && status < 400
});

const apiGet = async <T>(url: string, params?: ApiParameter): Promise<T> => {
  const searchParams = new URLSearchParams({
    $format: "JSON",
    ...params
  }).toString();

  const response = await axiosApi(`${url}?${searchParams}`)
    .then(res => res.data)
    .catch(err => {
      console.error(err);
      alert(err);
    });

  return response;
};

export { apiGet };
