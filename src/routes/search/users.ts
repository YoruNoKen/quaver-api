import { baseUrl } from "../../utils/baseUrl";
import { Users } from "../../types/search/users";

export async function users(name: string): Promise<Users[]> {
  if (!name) throw new Error("`name` parameter cannot be empty.");

  let res = await fetch(`${baseUrl}/search/${name}`).then((res) => res.json());
  return res.status === 200 ? res.users : [res];
}
