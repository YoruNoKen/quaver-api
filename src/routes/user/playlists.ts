import { Playlists } from "../../types/user/playlists";
import { baseUrl } from "../../utils/baseUrl";

export async function playlists(id: string | number): Promise<Playlists[]> {
  if (!id) throw new Error("All parameters must be provided.");
  let res = await fetch(`${baseUrl}/users/${id}/playlists`).then((res) => res.json());
  return res.status === 200 ? res.playlists : [res];
}
