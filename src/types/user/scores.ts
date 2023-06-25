export interface Scores {
  status?: number;
  error?: string;
  id: number;
  time: string;
  mode: number;
  mods: number;
  mods_string: string;
  performance_rating: number;
  personal_best: boolean;
  total_score: number;
  accuracy: number;
  grade: "X" | "SS" | "S" | "A" | "B" | "C" | "D" | "F";
  max_combo: number;
  count_marv: number;
  count_perf: number;
  count_great: number;
  count_good: number;
  count_okay: number;
  count_miss: number;
  scroll_speed: number;
  tournament_game_id: number;
  ratio: number;
  map: {
    id: number;
    mapset_id: number;
    md5: string;
    artist: string;
    title: string;
    difficulty_name: string;
    creator_id: number;
    creator_username: string;
    ranked_status: number;
  };
}
