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
            <dd>AI를 개발 과정에 활용하되, 나온 결과를 그대로 넘기지 않고 실제 동작과 예외를 직접 검증하는 방식에 관심이 많습니다.</dd>
          </div>
        </dl>
      </div>

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
