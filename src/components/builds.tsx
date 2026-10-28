import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { homeProjects } from "@/content/portfolio";
import { assetPath } from "@/lib/site";
export function Builds() {
  return (
    <section
      id="builds"
      className="builds-section section-space"
      aria-labelledby="builds-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Made at home</p>
          <h2 id="builds-heading">
            Off the screen.
            <br />
            <span className="serif-italic">Into the room.</span>
          </h2>
        </div>
        <p>
          Objects for everyday life,
          <br />
          made with my own hands.
        </p>
      </div>
      <div className="build-grid">
        {homeProjects.map((project, index) => (
          <article key={project.slug}>
            <Link
              href={"/projects/" + project.slug + "/"}
              className="build-link"
            >
              {project.cover && (
                <div className={"build-photo build-photo-" + project.slug}>
                  <Image
                    src={assetPath(project.cover.src)}
                    alt={project.cover.alt}
                    width={project.cover.width}
                    height={project.cover.height}
                    sizes="(max-width: 600px) 90vw, 33vw"
                  />
                </div>
              )}
              <div className="build-caption">
                <p className="eyebrow">
                  0{index + 1} / {project.discipline}
                </p>
                <h3>
                  {project.title}
                  <Arrow diagonal />
                </h3>
                <p>{project.summary}</p>
                <span className="read-project">
                  See the build <Arrow />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
