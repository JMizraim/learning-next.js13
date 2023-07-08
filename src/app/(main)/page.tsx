import { Suspense } from "react";
import { PostsList } from "../components";

export default function Main() {
  return (
    <div>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
