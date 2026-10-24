"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";

type ProjectExplorerProps = {
  projects: Project[];
  className: string;
}

export function ProjectExplorer({ projects, className }: ProjectExplorerProps) {

  const [selectedSlug, setSelectedSlug] = useState(projects[0].slug);
  const selected = projects.find((project) => project.slug === selectedSlug) ?? projects[0];

  return (
    <section id="projects" className={`${className}  `}>
      <div className="home-layout-inner">
        <div className="home-intro-box">
          <p className="eyebrow">대표 프로젝트</p>
          <h2 id="project-title">프로젝트마다 해결한 문제와<br />구현 방식을 정리했습니다.</h2>
          <p className="intro-description">프로젝트를 선택하면 맡은 역할과 주요 구현 내용을 확인할 수 있습니다.</p>
        </div>
        <div className="home-intro-box padding-none">
          <div className="case-list">
          {projects.map((project) => <button key={project.slug} className="case-button" type="button" onClick={() => setSelectedSlug(project.slug)}><span className="case-index">{project.number}</span><span className="case-label"><small>{project.kind}</small><strong>{project.title}</strong></span></button>)}
          </div>
          <article className="case-panel" key={selected.slug}><p className="case-kind">{selected.kind}</p><h3>{selected.title}</h3><p className="case-summary">{selected.summary}</p><div className="case-focus"><strong>주요 고민</strong><p>{selected.focus}</p></div><div className="case-panel-footer"><div className="stack-list">{selected.stack.map((skill) => <span key={skill}>{skill}</span>)}</div><Link className="case-link" href={`/projects/${selected.slug}`}>상세 사례 보기</Link></div></article>
        </div>
      </div>
    </section>
  );
}
