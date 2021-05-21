import axios, { Method } from "axios";

export const request = async ({
  url = "",
  method = "get",
  params,
  data,
}: RequestInput): Promise<[any, any]> => {
  const BE_HOST = window.location.origin + '/api';
  try {
    const result = await axios({
      url: `${BE_HOST}${url}`,
      method,
      data,
      params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return [null, result];
  } catch (error) {
    console.error(error);
    return [error, undefined];
  }
};