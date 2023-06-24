import { baseUrl } from "../../utils/baseUrl";
import { Details } from "../../types/users/details";

export async function details(ids: string | number | number[] | string[]): Promise<Details[]> {
  const names = Array.isArray(ids) ? ids : [ids];
  if (!names.length) throw new Error("`ids` parameters cannot be empty.");
  let searchArray = names.join("&id=");

  const res = await fetch(`${baseUrl}/users?id=${searchArray}`).then((res) => res.json());
  return res.status === 200 ? res.users : res;
}
