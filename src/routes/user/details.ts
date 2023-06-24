import { baseUrl } from "../../utils/baseUrl";
import { Details } from "../../types/user/details";

export async function details(id: number | string): Promise<Details> {
  if (!id) throw new Error("`id` parameter cannot be empty.");

  const res = await fetch(`${baseUrl}/users/full/${id}`).then((res) => res.json());
  return res.status === 200 ? res.user : res;
}
