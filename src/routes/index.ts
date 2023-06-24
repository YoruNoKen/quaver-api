import { details as users_details } from "./users/details";

export const users = {
  details: users_details,
};

import { achievements } from "./user/achievements";
import { details } from "./user/details";
import { graph } from "./user/graph";
import { maps } from "./user/maps";
import { playlists } from "./user/playlists";
import { scores } from "./user/scores";

export const user = {
  achievements,
  details,
  graph,
  maps,
  playlists,
  scores,
};

import { users as search_users } from "./search/users";

export const search = {
  users: search_users,
};
