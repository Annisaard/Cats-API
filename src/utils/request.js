import { apiKey } from "../env";
export const request = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
};
