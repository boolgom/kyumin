import Link from "next/link";
import { profile } from "@/content/portfolio";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="footer-note">A few things I’ve built along the way.</p>
      <Link href="/#top">Back to the beginning ↑</Link>
    </footer>
  );
}
