import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b-2 border-gray-800 p-4">
        <Link href="/" className="text-2xl font-bold">
          Posts App
        </Link>
      </header>
      <main className="p-4">{children}</main>
    </>
  );
}
