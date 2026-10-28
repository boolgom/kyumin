import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { workProjects } from "@/content/portfolio";
import { assetPath } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="projects-section section-space" aria-labelledby="projects-heading">
      <span id="work" className="anchor-alias" aria-hidden="true" />
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Projects · 2009—2026</p>
          <h2 id="projects-heading">
            Things I’ve <span className="serif-italic">built.</span>
          </h2>
        </div>
        <p>Products, engineering, and experiments.<br />The work behind the roles.</p>
      </div>
      <ol className="timeline">
        {workProjects.map((project) => (
          <li key={project.slug} className="timeline-item" id={project.slug}>
            <div className="timeline-date">{project.period}</div>
            <article className="timeline-body">
              <Link className={project.cover ? "project-link has-preview" : "project-link"} href={"/projects/" + project.slug + "/"}>
                <div className="project-summary">
                  <p className="eyebrow">{project.discipline}</p>
                  <h3>{project.title}<Arrow diagonal /></h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.summary}</p>
                  {project.outcome && <span className="outcome">{project.outcome}</span>}
                  <span className="read-project">Explore project <Arrow /></span>
                </div>
                {project.cover && (
                  <div className={"timeline-preview preview-" + project.slug}>
                    <Image src={assetPath(project.cover.src)} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 600px) 80vw, 240px" />
                  </div>
                )}
              </Link>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
