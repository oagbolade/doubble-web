import { _iv, _key, encryptData, decryptionData } from "../utils";

const BASE_URL =
  "https://sterlingdoubbleapi-dev.sterlingapps.p.azurewebsites.net/api";

interface HTTPParams {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  url: string;
  headers?: any;
  body?: any;
}

export interface HTTPResponse<T = any> {
  status: boolean;
  message: string;
  data: T;
}

export const httpRequest = async (
  params: HTTPParams
): Promise<HTTPResponse> => {
  try {
    const { url, method, body, headers } = params;

    if (!url) throw new Error("url is not set");
    if (typeof url !== "string") throw new Error("url must be a string");
    const options: any = {
      method: method || "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body) options.body = encryptData(body, _key, _iv);

    const res = await fetch(`${BASE_URL}/${url}`, options);

    const result = await res.text();

    const responseData = JSON.parse(decryptionData(result, _key, _iv));
    return responseData;
  } catch (error) {
    throw error;
  }
};
