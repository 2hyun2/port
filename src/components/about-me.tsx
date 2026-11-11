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
          <p>AI가 결과를 대신 내는 흐름보다, 요구사항을 구체화하고 구현과 검증을 빠르게 반복하는 흐름을 만듭니다.</p>
        </div>

        <ol className={styles.workflowSteps}>
          <li>
            <span>01</span>
            <div>
              <p>기록 <em>Obsidian</em></p>
              <strong>요구사항과 결정 내용 정리</strong>
              <small>다음 작업, 정책, 바뀐 이유를 남겨 흐름이 끊기지 않게 합니다.</small>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <p>구현 <em>Claude</em></p>
              <strong>요구사항을 코드로 구체화</strong>
              <small>정리한 요구사항을 바탕으로 화면과 기능을 구현하고, 필요한 선택지를 비교합니다.</small>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <p>검증 <em>Codex</em></p>
              <strong>코드와 실제 화면 확인</strong>
              <small>타입·빌드 검사와 화면 확인을 반복하며, 어긋나는 흐름을 수정합니다.</small>
            </div>
          </li>
        </ol>

        <p className={styles.workflowNote}><strong>판단과 검증은 직접 합니다.</strong> AI가 제안한 결과는 기존 구조, 데이터 흐름, 예외 상황에 맞는지 확인한 뒤 반영합니다.</p>
      </section>

      <section className={styles.career}>
        <p className={styles.careerLabel}>경력</p>
        <dl className={styles.careerList}>
          <div>
            <dt>2025.09 — 2026.07</dt>
            <dd>
              <strong>주식회사 비즈앤씨</strong>
              <span>프론트엔드 · 사내 업무 도구 및 자료 총괄</span>
              <p>의료용품 커머스 운영과 개선, 사내 업무 자료와 재고 조회 도구를 맡았습니다.</p>
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
          몇 번 돌아가는 상황이 있어도 개발을 놓지는 못했습니다.
          <br /> 다른 선택지를 제안받은 적도 있지만, 저는 여전히 코딩할 때 가장 즐겁고 더 잘해보고 싶습니다.
        </p>
      </div>
    </section>
  );
}
