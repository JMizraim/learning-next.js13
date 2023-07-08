import { CommentsResponse } from "../interfaces";
import { Comment } from "./Comment";
import { NextPage } from "next";

async function getComments(id: string) {
  const app_id = process.env.APP_ID;
  if (!app_id) throw new Error("API ID not found");
  const res = await fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
    headers: {
      "app-id": app_id,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("API request failed");
  const data: CommentsResponse = await res.json();
  return data.data;
}

interface Props {
  id: string;
}

export const CommentList: NextPage<Props> = async ({ id }) => {
  const posts = await getComments(id);

  if (posts.length === 0)
    return <p className="text-center text-gray-400 text-xl">No comments yet</p>;
  return (
    <ul className="sm:p-2 mx-auto list-none flex justify-start flex-col gap-2 w-full">
      {posts.map((post) => (
        <li key={post.id}>{<Comment comment={post} />}</li>
      ))}
    </ul>
  );
};
