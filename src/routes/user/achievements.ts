import { Achievements } from "../../types/user/achievements";
import { baseUrl } from "../../utils/baseUrl";

export async function achievements(id: string | number): Promise<Achievements[]> {
  if (!id) throw new Error("All parameters must be provided.");
  let res = await fetch(`${baseUrl}/users/${id}/achievements`).then((res) => res.json());
  return res.status === 200 ? res.achievements : [res];
}
