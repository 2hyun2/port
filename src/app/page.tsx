import Link from "next/link";

import { ProjectExplorer } from "@/components/project-explorer";
import { PublishingArchive } from "@/components/publishing-archive";
import { FeedbackForm } from "@/components/feedback-form";
import { projects } from "@/lib/projects";
import { livePublishingWorks, publishingArchive } from "@/lib/publishing";

import "./css/main.css"

export default function Home() {
  const usedStacks = [...new Set(
    projects
      .filter((project) => project.stackStatus !== "planned")
      .flatMap((project) => project.stack),
  )];

  return (
    <main className="inner" data-page="home">
      <section id="top" className="home-slide">
        <div className="home-layout-inner">
          <div className="home-intro-box">
            <p className="eyebrow">프론트엔드 개발자</p>
            <h2>흐름을 이해하고, 작동하는 화면을 만듭니다.</h2>
            <p className="intro-description">퍼블리싱을 바탕으로 서비스를 만들며, 화면이 왜 그렇게 동작해야 하는지부터 확인합니다. 프론트엔드를 중심으로 API와 데이터 흐름까지 연결해 온 개발자입니다.</p>
            <div className="intro-stack">
              <p>프로젝트에서 사용한 기술</p>
              <div className="intro-stack-list">
                {usedStacks.map((stack) => <span key={stack}>{stack}</span>)}
              </div>
            </div>
            <a className="solid-link" href="#projects">대표 프로젝트 보기</a>
          </div>
        </div>
      </section>

      <section id="about" className="home-slide">
        <div className="home-layout-inner">
          <div className="home-intro-box principle-card">
            <p className="eyebrow">간단 소개</p>
            <ol>
              <li><span>01</span> 재작업은 싫어 기획부터 꼼꼼히</li>
              <li><span>02</span> 코드는 범용성 있게 컴포넌트화</li>
              <li><span>03</span> AI는 만능이 아니야 검증하고 넘기자</li>
            </ol>
            <Link href="/about" className="solid-link">간단 소개 더보기</Link>
          </div>
          <div className="home-intro-box principle-card">
            <p className="eyebrow">작업 기준</p>
            <ol>
              <li><span>01</span> 사용자 흐름과 필요한 정보를 먼저 정리합니다.</li>
              <li><span>02</span> 화면 상태와 API 응답이 어떻게 이어지는지 나눠 봅니다.</li>
              <li><span>03</span> 실제 사용 과정에서 예외와 어긋나는 흐름을 다시 확인합니다.</li>
            </ol>
          </div>
        </div>
      </section>

      <ProjectExplorer projects={projects} className="home-slide" />

      <PublishingArchive
        works={livePublishingWorks}
        contribution={publishingArchive.contribution}
      />

      <FeedbackForm />

      <section id="contact" className="contact-section">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2 id="contact-heading">다음 사용자 흐름을<br />함께 만들 준비가 되어 있습니다.</h2>
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

      {/* <section className="home-slide">
        <div className="home-layout-inner">
          <div className="home-intro-box">
            <p className="eyebrow">WORKING STYLE</p>
            <h2>필요한 기능을 작게 만들고,<br />사용 흐름 안에서 검증합니다.</h2>
            <p className="intro-description">기술은 목적이 아니라 문제를 풀기 위한 도구로 사용합니다. <br />그래서 구현 이후에도 예외와 사용 맥락을 반복해서 살핍니다.</p>
            <a className="solid-link" href="mailto:eventietter@naver.com">eventietter@naver.com <span>↗</span></a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
