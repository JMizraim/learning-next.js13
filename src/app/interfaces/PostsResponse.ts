export interface PostsResponse {
  data: Post[];
  total: number;
  page: number;
  limit: number;
}

export interface Post {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: Owner;
}

interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
