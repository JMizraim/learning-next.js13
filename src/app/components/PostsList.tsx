import { PostCard } from "./PostCard";
import { PostsResponse } from "../interfaces";

async function getPosts() {
  const app_id = process.env.APP_ID;
  if (!app_id) throw new Error("API ID not found");
  const res = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
    headers: {
      "app-id": app_id,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("API request failed");
  const data: PostsResponse = await res.json();
  return data.data;
}

export const PostsList = async () => {
  const posts = await getPosts();
  return (
    <ul className="sm:p-2 md:w-max mx-auto list-none">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};
