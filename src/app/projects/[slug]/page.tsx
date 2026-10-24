import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import styles from "./page.module.css";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return { title: project ? `${project.title} | 이정현` : "Project | 이정현" }; }

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link className={styles.backLink} href="/"><span>←</span> 포트폴리오</Link>
        <span>{project.number} / 04</span>
      </nav>

      <section className={styles.hero}>
        <p className={styles.kind}>{project.kind}</p>
        <h1>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
      </section>

      <section className={styles.content}>
        {project.workItems ? (
          <>
            {project.workItems.map((item, index) => (
              <article className={styles.block} key={item.title}>
                <h2><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</h2>
                <div className={styles.workCopy}>
                  <p>{item.summary}</p>
                  <ul className={styles.workList}>
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </>
        ) : (
          <>
            <article className={styles.block}>
              <h2>해결하려던 문제</h2>
              <p>{project.focus}</p>
            </article>
            <article className={styles.block}>
              <h2>구현 내용</h2>
              <p>{project.implementation}</p>
            </article>
            <article className={styles.block}>
              <h2>사용 흐름</h2>
              <div className={styles.flowList}>
                {project.flow.map((step, index) => (
                  <div className={styles.flowItem} key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
            </article>
          </>
        )}
        <article className={styles.block}>
          <h2>사용 기술</h2>
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
