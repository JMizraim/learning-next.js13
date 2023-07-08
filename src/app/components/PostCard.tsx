import Image from "next/image";
import { Post } from "../interfaces";
import { getRelativeTimeFromNow } from "../utils";
import { FC } from "react";
import CustomLink from "./CustomLink";

interface Props {
  post: Post;
}

export const PostCard: FC<Props> = async ({ post }) => {
  const { image, likes, tags, text, publishDate, owner } = post;
  return (
    <article className="mb-4 p-4 rounded-lg bg-gray-800 flex flex-col gap-3">
      <header>
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={owner.picture}
            alt={owner.title + " " + owner.lastName}
            width={40}
            height={40}
          />
          <h2 className="font-bold">{`${owner.title}. ${owner.firstName} ${owner.lastName}`}</h2>
        </div>
      </header>
      <div>
        <Image
          className="w-full max-h-96 object-cover rounded-lg"
          src={image}
          alt={text.slice(0, 6)}
          width={250}
          height={250}
        />
        <p>{text}</p>
      </div>
      <footer className="flex gap-1 flex-col">
        <p>
          ❤️: <strong className="font-bold">{likes}</strong>
        </p>
        <time dateTime={publishDate}>
          {getRelativeTimeFromNow(new Date(publishDate))}
        </time>
        <ul className="border-2 border-gray-700 rounded-lg p-2 flex gap-2 flex-wrap">
          <p className="w-full">Tags</p>
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-gray-200 rounded-lg text-black p-1 px-2"
            >
              <p>{tag}</p>
            </li>
          ))}
        </ul>
        <CustomLink href={`/post/${post.id}`} />
      </footer>
    </article>
  );
};
