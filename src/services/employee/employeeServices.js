import { publicRequest } from "../fetcher.js";

export async function getAllEmployees() {
  let url = "/employee";
  const res = await publicRequest.get(url);
  return res;
}

export async function getAllEmployees2() {
  let url = "/employee2";
  const res = await publicRequest.get(url);
  return res;
}

export async function getEmployee(id) {
  let url = `/employee/${id}`;
  return await publicRequest.get(url);
}

export async function postEmployee(data) {
  let url = `/employee/`;
  return await publicRequest.post(url, data);
}

export async function putEmployee(id, data) {
  let url = `/employee/${id}`;
  console.log(url);
  return await publicRequest.put(url, data);
}

export async function patchEmployee(id, data) {
  let url = `/employee/${id}`;
  return await publicRequest.patch(url, data);
}

export async function deleteEmployee(id) {
  let url = `/employee/${id}`;
  return await publicRequest.delete(url);
}
