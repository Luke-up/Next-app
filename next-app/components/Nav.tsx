import Link from "next/link";

export default function Nav() {
  return (
    <div className="container text-center mx-auto columns-2">
      <Link href="/" className="w-full">Home</Link>
      <Link className="w-full" href="/about">About</Link>
    </div>
  );
}
