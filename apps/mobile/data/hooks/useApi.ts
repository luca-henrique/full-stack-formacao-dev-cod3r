import { useCallback } from "react";
import { Platform } from "react-native";

const platform = Platform.OS;

const isIos = platform === "ios";

const urlBase = isIos
  ? process.env.EXPO_PUBLIC_API_URL_IOS
  : process.env.EXPO_PUBLIC_API_URL_ANDROID;

export const useApi = () => {
  const httpGet = useCallback(async (path: string) => {
    const uri = path.startsWith("/") ? path : `/${path}`;

    const completeUrl = `${urlBase}${uri}`;

    const response = await fetch(completeUrl);

    return extractData(response);
  }, []);

  const httpPost = useCallback(async (path: string, body?: any) => {
    const uri = path.startsWith("/") ? path : `/${path}`;

    const completeUrl = `${urlBase}${uri}`;

    const response = await fetch(completeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    return extractData(response);
  }, []);

  function extractData(response: Response) {
    let content;
    try {
      content = response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `Ocorreu um erro inesperado com status ${response.status}`
        );
      }
      return null;
    }
    if (!response.ok) throw content;

    return content;
  }

  return { httpGet, httpPost };
};
