import { baseUrl } from "../../utils/baseUrl";
import { Graph } from "../../types/user/graph";

export async function graph(id: string | number, mode: string): Promise<Graph[]> {
  if (!id || !mode) throw new Error("All parameters must be provided.");

  let res = await fetch(`${baseUrl}/users/graph/rank?id=${id}&mode=${mode}`).then((res) => res.json());
  return res.status === 200 ? res.statistics : res;
}
