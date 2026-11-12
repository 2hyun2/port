import Link from "next/link";
import type { CSSProperties } from "react";

import { AxSection } from "@/components/ax-section";
import { CountUp } from "@/components/count-up";
import { FeedbackForm } from "@/components/feedback-form";
import { ProjectGrid } from "@/components/project-grid";
import { PublishingArchive } from "@/components/publishing-archive";
import { projects } from "@/lib/projects";
import { livePublishingWorks, publishingArchive } from "@/lib/publishing";

import "./css/main.css";

const stats = [
  { value: 3, suffix: "년 차", label: "웹 개발 경력" },
  { value: 50, suffix: "+", label: "구현한 기업·기관 사이트" },
  { value: 855, suffix: "개", label: "API로 연결한 카테고리" },
  { value: 20, suffix: "배", label: "엑셀 업무 자동화 최대 단축" },
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  // 기술이 아닌 연동 대상(ERP API 등)은 메인 목록에서 제외
  const hiddenStacks = new Set(["ERP API", "Cafe24 API"]);
  // 프론트엔드 핵심 기술을 앞에, 나머지는 프로젝트 순서대로
  const leadingStacks = ["React", "Next.js", "TypeScript", "JavaScript", "TanStack Query", "Zustand", "Zod", "Supabase", "Three.js", "React Three Fiber"];
  const usedStacks = [...new Set([...leadingStacks, ...projects.flatMap((project) => project.stack)])]
    .filter((stack) => !hiddenStacks.has(stack));

  return (
    <main className="inner" data-page="home">
      <section id="top" className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow hero-in" style={delay(0)}>프론트엔드 개발자 이정현</p>
        <h1 className="hero-title">
          <span className="hero-in" style={delay(80)}>API와 데이터를 연결해,</span>
          <span className="hero-in" style={delay(180)}><em>실제로 운영되는</em> 서비스를 만듭니다.</span>
        </h1>
        <p className="hero-description hero-in" style={delay(300)}>
          의료용품 커머스에서 Cafe24 모듈로 안 되는 기능을 API로 직접 구현하고, 내부 코드 없이 API만으로 사내 재고 조회 도구를 만들었습니다.
          그 전에는 에이전시에서 기업·기관 사이트를 반응형과 웹표준에 맞춰 구현했습니다.
          지금은 Next.js와 TypeScript로 여러 동호회가 함께 쓰는 운영 플랫폼을 만들고 있습니다.
        </p>
        <div className="hero-actions hero-in" style={delay(400)}>
          <a className="solid-link" href="#projects">대표 프로젝트 보기</a>
          <a className="ghost-link" href="#ax">AI와 일하는 방식</a>
        </div>

        <dl className="hero-stats hero-in" style={delay(500)}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd><CountUp value={stat.value} suffix={stat.suffix} /></dd>
            </div>
          ))}
        </dl>

        <div className="stack-marquee hero-in" style={delay(600)} aria-label="프로젝트에서 사용한 기술">
          <div className="stack-track">
            {[...usedStacks, ...usedStacks].map((stack, index) => (
              <span key={`${stack}-${index}`} aria-hidden={index >= usedStacks.length}>{stack}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="home-section about-cards">
        <div className="home-intro-box principle-card" data-reveal>
          <p className="eyebrow">간단 소개</p>
          <ol>
            <li><span>01</span> 재작업을 줄이려고 기획 단계부터 확인합니다.</li>
            <li><span>02</span> 여러 곳에서 다시 쓸 수 있게 컴포넌트로 나눕니다.</li>
            <li><span>03</span> AI가 만든 코드는 직접 검증한 뒤에 반영합니다.</li>
          </ol>
          <Link href="/about" className="solid-link">간단 소개 더보기</Link>
        </div>
        <div className="home-intro-box principle-card" data-reveal style={delay(100)}>
          <p className="eyebrow">작업 기준</p>
          <ol>
            <li><span>01</span> 사용자가 하려는 일과 필요한 정보를 먼저 정리합니다.</li>
            <li><span>02</span> 화면 상태와 API 응답이 어떻게 연결되는지 나눠 봅니다.</li>
            <li><span>03</span> 직접 써 보며 예외 상황을 다시 확인합니다.</li>
          </ol>
        </div>
      </section>

      <ProjectGrid projects={projects} />

      <AxSection />

      <PublishingArchive
        works={livePublishingWorks}
        contribution={publishingArchive.contribution}
      />

      <FeedbackForm />

      <section id="contact" className="contact-section" data-reveal>
        <div className="contact-panel">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2 id="contact-heading">다음 서비스를<br />함께 만들고 싶습니다.</h2>
            <p>협업 및 채용 관련 문의는 이메일로, 구현 기록은 GitHub에서 확인할 수 있습니다.</p>
          </div>

          <div className="contact-actions">
            <a className="contact-action" href="mailto:eventietter@naver.com">
              <span className="material-symbols-outlined">mail</span>
              <span><small>EMAIL</small>eventietter@naver.com</span>
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
            <a className="contact-action" href="https://github.com/2hyun2" target="_blank" rel="noreferrer">
              <span className="contact-github-mark">GH</span>
              <span><small>GITHUB</small>github.com/2hyun2</span>
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
