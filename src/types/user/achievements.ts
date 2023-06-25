export interface Achievements {
  status?: number;
  error?: string;
  id: number;
  steam_api_name: string;
  name: string;
  description: string;
  difficulty: string;
  unlocked: boolean;
}
