import styles from "./about-me.module.css";

export function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.heading}>
        <p className="eyebrow">ABOUT ME</p>
        <h2>이정현입니다.</h2>
        <p>
          퍼블리싱으로 시작해 프론트엔드까지 작업 범위를 넓혀 왔습니다.
          <br />화면을 구현하는 데서 끝내지 않고, 필요한 데이터와 API 구조까지 함께 고민하며 개발합니다.
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
              <p>개발을 시작할 때는 전체 구조를 깊이 고민하고, 마무리 단계에서는 예외 상황을 꼼꼼하게 점검합니다.</p>
            </dd>
          </div>
          <div>
            <dt>요즘 관심</dt>
            <dd>발전하는 AI를 실제 개발 흐름 속에서 활용하는 방법에 관심이 많습니다.</dd>
          </div>
        </dl>
      </div>

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
