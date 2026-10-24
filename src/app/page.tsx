import { ProjectExplorer } from "@/components/project-explorer";
import { PublishingArchive } from "@/components/publishing-archive";
import { projects } from "@/lib/projects";
import { livePublishingWorks, publishingArchive } from "@/lib/publishing";

import "./css/main.css"

export default function Home() {
  return (
    <main className="inner" data-page="home">
      <section id="top" className="home-slide">
        <div className="home-layout-inner">
          <div className="home-intro-box">
            <p className="eyebrow">프론트엔드 개발자</p>
            <h2>흐름을 이해하고, 작동하는 화면을 만듭니다.</h2>
            <p className="intro-description">운영 서비스와 제품 단위 프로젝트에서 사용자 행동, 화면 상태, 데이터를 연결하는 프론트엔드를 구현합니다.</p>
            <a className="solid-link" href="#projects">대표 프로젝트 보기</a>
          </div>
          <div className="home-intro-box principle-card">
            <p className="eyebrow">작업 기준</p>
            <ol>
              <li><span>01</span> 사용자 흐름을 먼저 정리합니다.</li>
              <li><span>02</span> 상태와 데이터의 역할을 나눕니다.</li>
              <li><span>03</span> 실제 브라우저에서 다시 확인합니다.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* <section className="home-slide"> */}
        {/* <div className="home-layout-inner"> */}
          {/* <div className="home-intro-box"> */}
            {/* <p className="eyebrow">WHAT I BUILD</p> */}
            {/* <h2>정적인 화면보다,<br />다음 행동이 쉬운 경험을 만듭니다.</h2> */}
            {/* <p className="intro-description">검색과 필터, 실시간 상태, 운영 데이터처럼 화면 밖의 조건이 사용자에게는 단순한 선택으로 보이도록 설계합니다.</p> */}
          {/* </div> */}
        {/* </div> */}
      {/* </section> */}

      <ProjectExplorer projects={projects} className="home-slide" />

      <PublishingArchive
        works={livePublishingWorks}
        contribution={publishingArchive.contribution}
      />

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
