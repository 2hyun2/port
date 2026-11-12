import Link from "next/link";
import type { CSSProperties } from "react";

const steps = [
  {
    number: "01",
    tool: "Obsidian · 규칙 문서",
    title: "AI가 따를 기준을 먼저 문서로",
    body: "요청 범위, 프로젝트별 사실관계, 쓰지 않을 표현, 검증 절차를 규칙 문서로 정리해 AI가 매 작업 전에 읽게 합니다. 대화가 바뀌어도 같은 기준으로 일합니다.",
  },
  {
    number: "02",
    tool: "Claude",
    title: "기능 단위로 초안을 빠르게",
    body: "요구사항을 기능 단위로 쪼개 초안을 만들고, 구현 선택지를 비교합니다. 반복적인 코드 작성 시간을 줄이고 설계에 더 많은 시간을 씁니다.",
  },
  {
    number: "03",
    tool: "Codex · 직접",
    title: "다른 AI로 검증하고, 판단은 직접",
    body: "작성한 AI가 아닌 Codex로 lint·build·test와 diff 대조를 돌리고, 실제 화면과 예외 상황은 직접 확인합니다. 기존 구조와 데이터 흐름에 맞는 코드만 반영합니다.",
  },
];

const cases = [
  {
    label: "회사 업무 · 비즈앤씨",
    title: "엑셀 수작업을 Node.js 자동화로 5~20배 단축",
    body: "담당 부서가 엑셀 함수와 손으로 하던 파일 정리와 엑셀 병합을, AI와 규칙·프롬프트를 설계해 Node.js 자동화와 매크로로 바꿨습니다. 생성된 코드는 직접 디버깅하고 고쳐 업무에 맞게 응용했고, 데이터 상태에 따라 수작업보다 5~20배 빨라졌습니다.",
  },
  {
    label: "검증 사례",
    title: "AI 초안이 놓친 순환 트리를 차단",
    body: "위치를 자기 하위로 옮기면 트리가 순환하는 문제를 직접 테스트로 찾아 서버 규칙으로 막았습니다.",
    href: "/projects/storage-basket",
    linkLabel: "우리집 공간록 보기",
  },
  {
    label: "협업 설계",
    title: "작성하는 AI와 검증하는 AI를 분리",
    body: "두 AI가 같은 파일을 번갈아 고치며 서로 덮어쓰는 문제가 생기자, Claude는 작성하고 Codex는 lint·build·test와 diff 대조로 검증하도록 역할을 나누고 그 이유를 결정 기록으로 남겼습니다.",
    href: "https://github.com/2hyun2/storage-basket/blob/main/docs/%EA%B2%B0%EC%A0%95-%EA%B8%B0%EB%A1%9D.md",
    linkLabel: "결정 기록 보기",
  },
];

export function AxSection() {
  return (
    <section id="ax" className="ax-section">
      <div className="ax-inner">
        <div className="section-head" data-reveal>
          <p className="eyebrow">AI와 일하는 방식</p>
          <h2>결정은 제가 하고,<br />반복은 AI와 줄입니다.</h2>
          <p>AI에게 결과를 맡기지 않습니다. 기준을 문서로 정하고, 초안은 빠르게 만들고, 검증은 직접 합니다. 이 방식으로 회사의 반복 업무를 자동화했고, 개인 프로젝트와 이 포트폴리오도 같은 방식으로 만들었습니다.</p>
        </div>

        <ol className="ax-steps">
          {steps.map((step, index) => (
            <li key={step.number} data-reveal style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}>
              <span className="ax-step-number">{step.number}</span>
              <p className="ax-step-tool">{step.tool}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <ul className="ax-cases">
          {cases.map((item, index) => (
            <li key={item.title} data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}>
              <p className="ax-case-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.href && (item.href.startsWith("http")
                ? <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} <span aria-hidden="true">↗</span></a>
                : <Link href={item.href}>{item.linkLabel} <span aria-hidden="true">→</span></Link>)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
