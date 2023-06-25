import { baseUrl } from "../../utils/baseUrl";
import { Scores } from "../../types/user/scores";

export async function scores(id: string | number, { mode, limit, page, type }: { mode: string | number; limit?: number; page?: number; type: "best" | "recent" | "firstplace" }): Promise<Scores[]> {
  if (!id || !mode || !type) throw new Error("Required parameters must be provided.");
  if (!(type === "best" || type === "firstplace" || type === "recent")) throw new Error("`type` must be either: best, firstplace, recent");

  let url = `${baseUrl}/users/scores/${type}?id=${id}&mode=${mode}`;
  if (limit) url += `&limit=${limit}`;
  if (page) url += `&page=${page}`;

  let res = await fetch(url).then((res) => res.json());
  return res.status === 200 ? res.scores : [res];
}
