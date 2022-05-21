import { publicRequest } from "../fetcher.js";

export async function getAllDepartments() {
  let url = "/department";
  const res = await publicRequest.get(url);
  return res;
}
