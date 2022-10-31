export interface Thread {
  id: number;
  text: string;
  tweets: Tweet[];
  rich_text: RichText[];
  num_tweets: number;
  last_edited: string;
  preview: string;
  scheduled_date: any;
  status: number;
  error_msg: any;
  thread_head_twitter_url: any;
  is_publicly_shared: boolean;
  title: any;
  published_on: any;
  publish_to_typefully: boolean;
  is_empty: boolean;
  share_id: string;
  pinned: boolean;
  numbering_style: any;
  prompt: any;
  reply_to_status_url: any;
  owned_by_me: boolean;
  comments_enabled: boolean;
}

export interface Tweet {
  end: number;
  hash: number;
  text: string;
  start: number;
  images: any[];
  length: number;
}

export interface RichText {
  type: string;
  attrs: Attrs;
  content: Content[];
}

export interface Attrs {
  id: string;
  gifs: any[];
  text: string;
  images: any[];
  videos: any[];
  charCount: number;
}

export interface Content {
  type: string;
  content?: Content2[];
}

export interface Content2 {
  text: string;
  type: string;
}
