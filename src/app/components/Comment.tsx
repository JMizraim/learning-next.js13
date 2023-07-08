import Image from "next/image";
import { Comment as IComment } from "../interfaces";
import { getRelativeTimeFromNow } from "../utils";
import { FC } from "react";

interface Props {
  comment: IComment;
}

export const Comment: FC<Props> = ({ comment }) => {
  return (
    <div className="flex gap-2 items-start">
      <Image
        className="rounded-full"
        width={35}
        height={35}
        src={comment.owner.picture}
        alt={comment.owner.title + " " + comment.owner.lastName}
      />
      <div>
        <p>
          <strong className="font-bold inline">{`${comment.owner.title}. ${comment.owner.lastName}: `}</strong>
          {` ${comment.message}`}
        </p>
        <time
          className="mt-2 text-sm text-gray-400"
          dateTime={comment.publishDate}
        >
          {getRelativeTimeFromNow(new Date(comment.publishDate), "Commented")}
        </time>
      </div>
    </div>
  );
};
