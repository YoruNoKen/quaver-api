export interface Details {
  info: {
    id: number;
    steam_id: string;
    username: string;
    time_registered: string;
    allowed: number;
    privileges: number;
    usergroups: number;
    mute_endtime: string;
    latest_activity: string;
    country: string;
    avatar_url: string;
    userpage: string;
    information: {
      discord?: string;
      twitter?: string;
      twitch?: string;
      youtube?: string;
    };
    online: boolean;
  };
  clan: string | null;
  profile_badges: badges[];
  activity_feed: feed[];
  keys4: Keys;
  keys7: Keys;
}

interface badges {
  id: number;
  name: string;
  description: string;
}

interface feed {
  id: number;
  type: string;
  timestamp: string;
  map: { id: number; name: string };
}

interface Keys {
  globalRank: number;
  countryRank: number;
  multiplayerWinRank: number;
  stats: {
    user_id: number;
    total_score: number;
    ranked_score: number;
    overall_accuracy: number;
    overall_performance_rating: number;
    play_count: number;
    fail_count: number;
    max_combo: number;
    replays_watched: number;
    count_grade_x: number;
    count_grade_ss: number;
    count_grade_s: number;
    count_grade_a: number;
    count_grade_b: number;
    count_grade_c: number;
    count_grade_d: number;
    total_marv: number;
    total_perf: number;
    total_great: number;
    total_good: number;
    total_okay: number;
    total_miss: number;
    total_pauses: number;
    multiplayer_wins: number;
    multiplayer_losses: number;
    multiplayer_ties: number;
  };
}
