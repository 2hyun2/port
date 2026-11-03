import styles from "./about-me.module.css";

export function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.heading}>
        <p className="eyebrow">ABOUT ME</p>
        <h2>이정현입니다.</h2>
        <p>
          코딩이 재밌습니다.
          <br />AI에게 밀리더라도 포기할 수 없는 나의 업입니다.
          <br />퍼블리싱으로 시작해 프론트엔드까지 이젠 REST API도 설계를 해보며 개발을 하고 있습니다.
        </p>
      </div>

      <div className={styles.profile}>
        <div className={styles.profileIntro}>
          <strong>복잡한 내용을<br />정리하는 일을 좋아합니다.</strong>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt>좋아하는 작업</dt>
            <dd>흩어진 정보를 화면의 순서로 정리하기</dd>
          </div>
          <div>
            <dt>작업할 때</dt>
            <dd>처음에는 구조를 오래 보고, 마지막에는 예외를 확인합니다.</dd>
          </div>
          <div>
            <dt>요즘 관심</dt>
            <dd>AI 도구를 실제 구현 흐름 안에서 잘 쓰는 방법</dd>
          </div>
        </dl>
      </div>

      <div className={styles.note}>
        <span>잡담</span>
        <p>
          2번의 회사 경영악화에 따른 권고사직에도 내겐 놓을 수 없는 열정이 있습니다.
          <br />
          중간에 다른 직종의 좋은 제의가 왔지만 저는 좀 더 해보고 싶습니다.
        </p>
      </div>
    </section>
  );
}
