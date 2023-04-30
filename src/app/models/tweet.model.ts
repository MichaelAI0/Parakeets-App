export interface Tweet {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  likes: number;
  retweets: number;
  liked_by: string[];
  retweeted_by: string[];
}
