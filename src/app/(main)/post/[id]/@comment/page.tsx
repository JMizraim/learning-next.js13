import { CommentList } from "@/app/components";
import { Suspense } from "react";
import { NextPage } from "next";

interface Props {
  params: {
    id: string;
  };
}

const CommentPage: NextPage<Props> = ({ params }) => {
  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">Comments</h2>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentList id={params.id} />
      </Suspense>
    </section>
  );
};

export default CommentPage;
