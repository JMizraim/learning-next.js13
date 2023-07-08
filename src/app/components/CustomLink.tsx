"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  href: string;
}

const CustomLink: FC<Props> = ({ href }) => {
  const pathname = usePathname();
  if (pathname === href) return null;
  return (
    <Link className="text-right text-blue-500" href={href}>
      View Post
    </Link>
  );
};

export default CustomLink;
