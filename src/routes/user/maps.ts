import { baseUrl } from "../../utils/baseUrl";
import { Maps } from "../../types/user/maps";

export async function maps(id: string | number, { mode, status, page }: { mode?: string | number; status?: string; page?: number }): Promise<Maps[]> {
  if (!id) throw new Error("Required parameters must be provided.");

  let url = `${baseUrl}/users/mapsets/${id}`;
  if (status) url += `&status=${status}`;
  if (page) url += `&page=${page}`;
  if (mode) url += `&mode=${page}`;

  let res = await fetch(url).then((res) => res.json());
  return res.status === 200 ? res.mapsets : [res];
}
