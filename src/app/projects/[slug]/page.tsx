import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { ProjectGallery } from "@/components/project-gallery";
import { ShareProject } from "@/components/share-project";
import { getProject, profile, projects } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const url = siteUrl && siteUrl + "/projects/" + project.slug + "/";
  return {
    title: project.title,
    description: project.summary,
    ...(url && { alternates: { canonical: url } }),
    openGraph: {
      ...(url && { url }),
      title: project.title + " · " + profile.name,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: project.title + " · " + profile.name,
      description: project.summary,
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const section = project.category === "home" ? "builds" : "projects";
  const siblings = projects.filter(
    (item) => item.category === project.category,
  );
  const index = siblings.findIndex((item) => item.slug === project.slug);
  const next = siblings[(index + 1) % siblings.length];
  const related = (project.related ?? [])
    .map(getProject)
    .filter((item) => item !== undefined);
  return (
    <main
      id="main"
      tabIndex={-1}
      className={"project-page project-" + project.slug}
    >
      <div className="project-toolbar">
        <Link href={"/#" + section} className="back-link">
          <Arrow className="arrow-back" />
          {project.category === "home" ? "Made at home" : "All projects"}
        </Link>
        <ShareProject />
      </div>
      <header className="project-heading">
        <p className="eyebrow">
          {project.period} <span>/</span> {project.discipline}
        </p>
        <h1>{project.title}</h1>
        <p className="project-standfirst">{project.summary}</p>
        {project.outcome && (
          <p className="project-outcome">
            <span aria-hidden="true">↗</span>
            {project.outcome}
          </p>
        )}
        <dl className="project-facts">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.discipline}</dd>
          </div>
        </dl>
      </header>
      <ProjectGallery project={project} />
      <div className="project-story">
        <aside className="project-sidebar">
          <p className="eyebrow">The work behind it</p>
          <ul className="tag-list" aria-label="Technologies and areas of work">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <div className="project-resources">
              <p className="eyebrow">Elsewhere</p>
              {project.links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <Arrow diagonal />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          )}
        </aside>
        <div className="story-sections">
          {project.sections.map((section, index) => (
            <section key={section.title}>
              <p className="eyebrow">0{index + 1}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          {related.length > 0 && (
            <nav className="related-projects" aria-label="Related projects">
              <p className="eyebrow">Connected work</p>
              {related.map((item) => (
                <Link key={item.slug} href={"/projects/" + item.slug + "/"}>
                  {item.title}
                  <Arrow diagonal />
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
      <nav className="project-pagination" aria-label="More projects">
        <Link href={"/#" + section}>
          <span className="eyebrow">Back to the collection</span>
          <span>
            {project.category === "home" ? "Made at home" : "All projects"}{" "}
            <Arrow className="arrow-back" />
          </span>
        </Link>
        <Link href={"/projects/" + next.slug + "/"}>
          <span className="eyebrow">Next project</span>
          <span>
            {next.title}
            <Arrow />
          </span>
        </Link>
      </nav>
    </main>
  );
}
