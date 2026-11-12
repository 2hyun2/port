import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import styles from "./page.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.flatMap(({ slug, aliases = [] }) => [slug, ...aliases].map((value) => ({ slug: value })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} | 이정현` : "Project | 이정현" };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link className={styles.backLink} href="/#projects"><span>←</span> 포트폴리오</Link>
        <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
      </nav>

      <section className={styles.hero}>
        <p className={styles.kind}>{project.kind}</p>
        <h1>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
        {project.progressNote && <p className={styles.progressNote}>{project.progressNote}</p>}
        {project.links && (
          <div className={styles.links}>
            {project.links.map((link) => (
              <a key={link.href} className={styles.siteLink} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
            ))}
          </div>
        )}
      </section>

      {project.images && (
        <section className={styles.gallery} aria-label="프로젝트 화면">
          {project.images.map((image) => (
            <figure key={image.src} data-reveal className={image.device === "mobile" ? styles.shotMobile : styles.shotDesktop}>
              {/* eslint-disable-next-line @next/next/no-img-element -- static export에서 원본 이미지를 그대로 사용 */}
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <section className={styles.content}>
        <article className={styles.block} data-reveal>
          <h2>주요 고민</h2>
          <p>{project.focus}</p>
        </article>
        {project.workItems.map((item, index) => (
          <article className={styles.block} key={item.title} data-reveal>
            <h2><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</h2>
            <div className={styles.workCopy}>
              <p>{item.summary}</p>
              <ul className={styles.workList}>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
        <article className={styles.block} data-reveal>
          <h2>{project.stackLabel ?? "사용 기술"}</h2>
          <div className={styles.stackList}>
            {project.stack.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </article>
      </section>

      <section className={styles.nextCases}>
        <h2>다른 사례 보기</h2>
        <div className={styles.nextLinks}>
          {projects.filter((item) => item.slug !== project.slug).map((item) => (
            <Link key={item.slug} href={`/projects/${item.slug}`}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
