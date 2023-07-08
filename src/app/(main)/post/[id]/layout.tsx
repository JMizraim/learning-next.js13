import { ReactNode } from "react";

function Layout({
  children,
  post,
  comment,
}: {
  children: ReactNode;
  post: ReactNode;
  comment: ReactNode;
}) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 md:max-w-screen-lg mx-auto">
      {children}
      {post}
      {comment}
    </div>
  );
}

export default Layout;
