import { Arrow } from "@/components/arrow";
import { profile } from "@/content/portfolio";

export function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div>
        <p className="eyebrow">Keep in touch</p>
        <h2 id="contact-heading">
          Let’s <span className="serif-italic">talk.</span>
        </h2>
        <p>About products, engineering, or something worth building.</p>
      </div>
      <div className="contact-links">
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn <Arrow diagonal />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub <Arrow diagonal />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
