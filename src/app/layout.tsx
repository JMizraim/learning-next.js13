import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "800"],
});

export const metadata: Metadata = {
  title: "Posts App",
  description: "Posts app made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
