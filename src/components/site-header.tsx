import Link from "next/link";
import { Arrow } from "@/components/arrow";
export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Kyumin Shim home">
        kyumin<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#career">Career</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#builds">Made at home</Link>
        <Link href="/#contact">
          Say hello <Arrow diagonal />
        </Link>
      </nav>
    </header>
  );
}
