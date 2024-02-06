import {
  type InternalServerErrorResponse,
  type MethodNotAllowedResponse,
  type NotFoundResponse,
  type UnprocessableContentResponse,
} from "@/types/errors";
import type Options from "@/types/options";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";

const DEFAULT_HOST = "https://netlinq.de/api/v1";

export default class NetlinqRequest {
  private static host: string;
  private static apiKey: string;

  public static initialize(options: Options) {
    this.apiKey = options.apiKey;
    this.host = options.host ?? DEFAULT_HOST;
  }

  public static async call<T>(config: AxiosRequestConfig) {
    try {
      const response = await axios.request<T>({
        ...config,
        baseURL: this.host,
        params: {
          ...config.params,
          apiKey: this.apiKey,
        } as Record<string, string>,
        headers: {
          ...config.headers,
          // We need to set this to receive error messages as JSON
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data) {
        if (err.response.status === 404) {
          throw new Error((err.response.data as NotFoundResponse).message);
        }

        if (err.response.status === 405) {
          throw new Error(
            (err.response.data as MethodNotAllowedResponse).message,
          );
        }

        if (err.response.status === 422) {
          const data = err.response.data as UnprocessableContentResponse;
          throw new Error(
            `${data.message}: ${Object.values(data.errors).join(", ")}`,
          );
        }

        if (err.response.status === 500) {
          throw new Error(
            (err.response.data as InternalServerErrorResponse).message,
          );
        }

        // TODO: Handle other errors
        throw err;
      }

      // Unknown error
      throw err;
    }
  }
}
