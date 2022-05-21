import { publicRequest } from "../fetcher.js";

export async function getAllManager() {
  let url = "/manager";
  const res = await publicRequest.get(url);
  return res;
}
