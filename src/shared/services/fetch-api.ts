import { AxiosRequestConfig } from "axios";

import { api } from "./axios-config";
import { notify } from "../utils/notify";

export async function fetchApi<T>(
  url = "",
  errorMessage = "",
  configAxios?: AxiosRequestConfig<any>
): Promise<T | null> {
  let response = null;

  try {
    const responseApi = await api.get<T>(url, configAxios);

    if (responseApi.status) {
      response = responseApi.data;
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "canceled") {
        response = null;
        return null;
      }

      response = null;
      notify(errorMessage);
    }
  }

  return response;
}
