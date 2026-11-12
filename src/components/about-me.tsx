import styles from "./about-me.module.css";

export function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.heading}>
        <p className="eyebrow">소개</p>
        <h2>이정현입니다.</h2>
        <p>
          퍼블리싱으로 시작해 프론트엔드까지 작업 범위를 넓혀 왔습니다.
          <br />화면을 구현할 때도 데이터가 어디서 오고, 어떤 상태로 바뀌며, 사용자에게 어떻게 보여야 하는지까지 함께 확인합니다.
          <br />복잡하게 얽힌 내용도 사용자가 바로 이해할 수 있는 화면 순서로 정리하는 일을 좋아합니다.
        </p>
      </div>

      <div className={styles.profile}>
        <div className={styles.profileIntro}>
          <strong>복잡한 내용을<br />정리하는 일을 좋아합니다.</strong>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt>일하는 방식</dt>
            <dd>
              <p>흩어진 정보와 요구사항을 사용자가 보기 편한 화면 순서로 정돈합니다.</p>
              <p>개발을 시작할 때는 화면만 보지 않고 데이터와 상태가 바뀌는 흐름까지 먼저 살핍니다. 마무리 단계에서는 예외 상황과 사용 중 막히는 지점을 꼼꼼하게 점검합니다.</p>
            </dd>
          </div>
          <div>
            <dt>요즘 관심</dt>
            <dd>다음 작업에서도 바로 쓸 수 있도록 요구사항과 결정 내용을 남기고, 반복되는 일을 줄이는 방식에 관심이 많습니다.</dd>
          </div>
        </dl>
      </div>

      <section className={styles.aiWorkflow}>
        <div className={styles.workflowIntro}>
          <div>
            <p className={styles.workflowLabel}>AI와 작업하는 방식</p>
            <h3>결정은 내가 하고,<br />반복은 AI와 줄입니다.</h3>
          </div>
          <p>AI에게 결과를 맡기지 않습니다. 요구사항과 규칙은 제가 정하고, AI로 초안을 빠르게 만든 뒤 리뷰와 검증을 반복합니다.</p>
        </div>

        <ol className={styles.workflowSteps}>
          <li>
            <span>01</span>
            <div>
              <p>기록 <em>Obsidian</em></p>
              <strong>요구사항과 결정 내용 정리</strong>
              <small>다음 작업, 정책, 바뀐 이유를 남겨 작업이 끊기지 않게 합니다.</small>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <p>초안 <em>Claude · Codex</em></p>
              <strong>기능 단위로 코드 초안 작성</strong>
              <small>정리한 요구사항을 기능 단위로 나눠 초안을 만들고, 구현 선택지를 비교합니다.</small>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <p>검증 <em>직접</em></p>
              <strong>리뷰와 예외 테스트</strong>
              <small>타입·빌드 검사, 실제 화면 테스트로 AI가 놓친 예외를 찾아 고칩니다.</small>
            </div>
          </li>
        </ol>

        <p className={styles.workflowNote}><strong>판단과 검증은 직접 합니다.</strong> 예를 들어 우리집 공간록에서는 AI 초안이 위치를 자기 하위로 옮기는 경우를 막지 않아 트리가 순환하는 문제를 직접 찾아 서버 규칙으로 차단했습니다.</p>
      </section>

      <section className={styles.career}>
        <p className={styles.careerLabel}>경력</p>
        <dl className={styles.careerList}>
          <div>
            <dt>2025.09 — 2026.07</dt>
            <dd>
              <strong>주식회사 비즈앤씨</strong>
              <span>프론트엔드 · 사내 업무 도구 및 자료 총괄</span>
              <p>의료용품 커머스 운영과 개선, 사내 업무 자료와 재고 조회 도구를 맡았습니다. 담당 부서의 엑셀 수작업을 AI와 설계한 Node.js 자동화로 바꿔 작업 시간을 5~20배 줄였습니다.</p>
            </dd>
          </div>
          <div>
            <dt>2022.07 — 2024.11</dt>
            <dd>
              <strong>주식회사 웹컴퍼니</strong>
              <span>퍼블리싱팀</span>
              <p>기업·기관 사이트를 제작하며 반응형과 웹표준을 고려한 화면을 구현했습니다.</p>
            </dd>
          </div>
        </dl>
      </section>

      <div className={styles.note}>
        <span>잡담</span>
        <p>
          다른 길도 고민해 봤지만, 결국 가장 즐겁고 더 잘하고 싶은 일은 코딩이었습니다.
        </p>
      </div>
    </section>
  );
}
