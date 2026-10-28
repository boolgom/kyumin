import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { profile } from "@/content/portfolio";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="eyebrow">Kyumin Shim / Founder & engineer</p>
      <div className="hero-grid">
        <div>
          <h1 id="hero-heading">
            Two startups.
            <br />
            <span className="serif-italic">Both acquired.</span>
          </h1>
          <p className="hero-bio">{profile.introduction}</p>
          <Link href="#career" className="text-cta">
            Explore my career <Arrow className="arrow-down" />
          </Link>
        </div>
        <aside className="current-note" aria-label="Currently">
          <p className="eyebrow">
            <span className="status-dot" /> The next chapter
          </p>
          <p>{profile.current}</p>
          <span className="eyebrow current-date">2026 —</span>
        </aside>
      </div>
      <div className="proof-strip">
        <Link href="/projects/entry/">
          <span className="eyebrow">Co-founder & CTO</span>
          <strong>
            Entry Labs <Arrow diagonal />
          </strong>
          <span className="proof-outcome">
            Acquired by Naver <span>2016</span>
          </span>
        </Link>
        <Link href="/projects/traw/">
          <span className="eyebrow">Co-founder & CEO</span>
          <strong>
            Traw <Arrow diagonal />
          </strong>
          <span className="proof-outcome">
            Acquired by Goodnotes <span>2023</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
