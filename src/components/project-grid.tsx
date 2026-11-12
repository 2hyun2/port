import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";

type ProjectGridProps = {
  projects: Project[];
};

/** 이미지가 없는 프로젝트(사내 도구, 진행 중)는 핵심 키워드로 표지를 만듭니다. */
const textCovers: Record<string, string[]> = {
  "inventory-tool": ["Promise.all", "데이터 매칭", "ERP × 자사몰"],
  badminton: ["Socket.io", "v1 → v2", "멀티 동호회"],
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" className="home-section">
      <div className="section-head" data-reveal>
        <p className="eyebrow">대표 프로젝트</p>
        <h2>프로젝트마다 해결한 문제와<br />구현 방식을 정리했습니다.</h2>
      </div>

      <ul className="project-grid">
        {projects.map((project, index) => {
          const cover = project.images?.find((image) => image.device !== "mobile");
          return (
            <li key={project.slug} data-reveal style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as CSSProperties}>
              <Link className="project-card" href={`/projects/${project.slug}`}>
                <div className="project-cover">
                  {cover ? (
                    // eslint-disable-next-line @next/next/no-img-element -- static export에서 원본 이미지를 그대로 사용
                    <img src={cover.src} alt={cover.alt} loading="lazy" />
                  ) : (
                    <div className="project-text-cover" aria-hidden="true">
                      <span className="project-text-number">{project.number}</span>
                      <div>{(textCovers[project.slug] ?? project.stack.slice(0, 3)).map((word) => <span key={word}>{word}</span>)}</div>
                    </div>
                  )}
                </div>
                <div className="project-card-copy">
                  <p className="project-kind"><span>{project.number}</span>{project.kind}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-card-footer">
                    <div className="stack-list">{project.stack.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div>
                    <span className="project-arrow material-symbols-outlined" aria-hidden="true">arrow_outward</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
