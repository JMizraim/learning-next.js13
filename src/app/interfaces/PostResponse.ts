export interface PostResponse {
  id: string;
  image: string;
  likes: number;
  link: string;
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
