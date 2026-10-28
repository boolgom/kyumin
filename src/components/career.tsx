import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { career } from "@/content/portfolio";

export function Career() {
  return (
    <section id="career" className="section-space" aria-labelledby="career-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Career</p>
          <h2 id="career-heading">
            Companies & <span className="serif-italic">chapters.</span>
          </h2>
        </div>
        <p>Where I’ve built, led, and grown.</p>
      </div>
      <ol className="timeline career-timeline">
        {career.map((position) => (
          <li
            key={position.company}
            className={"timeline-item" + (position.current ? " current-milestone" : "")}
          >
            <div className="timeline-date">{position.period}</div>
            <div className="timeline-body career-body">
              <p className="eyebrow">
                {position.current && <span className="status-dot" />}
                {position.role}
              </p>
              <h3>{position.company}</h3>
              <p className="project-description">{position.summary}</p>
              {position.outcome && <span className="outcome">{position.outcome}</span>}
              {position.projectSlug && (
                <Link className="career-project-link" href={"/projects/" + position.projectSlug + "/"}>
                  Explore the work <Arrow diagonal />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
