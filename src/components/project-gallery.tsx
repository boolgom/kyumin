import Image from "next/image";
import type { Project } from "@/content/portfolio";
import { assetPath } from "@/lib/site";
export function ProjectGallery({ project }: { project: Project }) {
  if (!project.images.length) return null;
  return (
    <section
      className="project-gallery-section"
      aria-label="Project photographs and screenshots"
    >
      <div
        className={
          "project-gallery gallery-count-" +
          project.images.length +
          (project.galleryNote ? " gallery-archive" : "")
        }
      >
        {project.images.map((image, index) => (
          <figure key={image.src}>
            <a
              href={assetPath(image.src)}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-image"
              aria-label={image.caption + " (open original image in a new tab)"}
            >
              <Image
                src={assetPath(image.src)}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 600px) 90vw, 50vw"
                style={{ width: Math.min(image.width, 1000) }}
              />
              <span className="image-open" aria-hidden="true">
                ↗
              </span>
            </a>
            <figcaption>
              <span className="eyebrow">0{index + 1}</span>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      {project.galleryNote && (
        <p className="gallery-note">{project.galleryNote}</p>
      )}
    </section>
  );
}
