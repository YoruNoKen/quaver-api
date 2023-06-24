export interface Maps {
  id: number;
  package_md5: string;
  creator_id: number;
  creator_username: string;
  artist: string;
  title: string;
  source: string;
  tags: string;
  description: string;
  date_submitted: string;
  date_last_updated: string;
  visible: number;
  ranked_status: number;
  maps: MapData[];
}

interface MapData {
  id: number;
  md5: string;
  game_mode: number;
  ranked_status: number;
  difficulty_name: string;
  length: number;
  bpm: number;
  difficulty_rating: number;
  count_hitobject_normal: number;
  count_hitobject_long: number;
  play_count: number;
  fail_count: number;
}
