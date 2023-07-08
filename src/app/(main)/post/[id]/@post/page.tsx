import { PostCard } from "@/app/components";
import { PostResponse } from "@/app/interfaces";
import { NextPage } from "next";

const getPost = async (id: string) => {
  const app_id = process.env.APP_ID;
  if (!app_id) throw new Error("API ID not found");
  const res = await fetch(`https://dummyapi.io/data/v1/post/${id}`, {
    headers: {
      "app-id": app_id,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("API request failed");
  const data: PostResponse = await res.json();
  return data;
};

interface Props {
  params: {
    id: string;
  };
}

const PostPage: NextPage<Props> = async ({ params }) => {
  const post = await getPost(params.id);
  return <PostCard post={post} />;
};

export default PostPage;
