import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "이정현 프론트엔드 개발자 포트폴리오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "52px 60px",
          color: "#17191d",
          background: "#f7f7f4",
          border: "18px solid #3156d9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#3156d9", fontSize: 26, fontWeight: 800, letterSpacing: "0.08em" }}>FRONTEND DEVELOPER</span>
          <span style={{ display: "flex", width: 64, height: 64, alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: 28, fontWeight: 800, background: "#3156d9" }}>JH</span>
        </div>

        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center" }}>
          <span style={{ marginBottom: 18, color: "#68707c", fontSize: 26, fontWeight: 700 }}>이정현 포트폴리오</span>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 800, lineHeight: 1.16, letterSpacing: "-0.04em" }}>
            <span>흐름을 이해하고,</span>
            <span>작동하는 화면을 만듭니다.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: "2px solid #17191d", color: "#68707c", fontSize: 24 }}>
          <span>사용자 흐름 · API · 데이터 상태</span>
          <span>LEE JUNGHYUN</span>
        </div>
      </div>
    ),
    size,
  );
}
