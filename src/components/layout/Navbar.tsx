import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Link href="/" className="font-bold">MyApp</Link>
      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
