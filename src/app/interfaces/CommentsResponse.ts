export interface CommentsResponse {
  data: Comment[];
  total: number;
  page: number;
  limit: number;
}

export interface Comment {
  id: string;
  message: string;
  owner: Owner;
  post: string;
  publishDate: string;
}

interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
