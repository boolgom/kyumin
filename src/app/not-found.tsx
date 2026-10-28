import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1>This page isn’t here.</h1>
      <p>You can find my projects in the collection.</p>
      <Link className="text-cta" href="/#projects">
        Back to projects →
      </Link>
    </main>
  );
}
