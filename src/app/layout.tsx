import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./css/reset.css"
import "./css/globals.css"
import "./css/layout.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealObserver } from "@/components/reveal-observer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://2hyun2.github.io/port"),
  title: "이정현 | 프론트엔드 개발자 포트폴리오",
  description: "사용자 흐름을 이해하고, API와 데이터 상태를 연결해 작동하는 화면을 만드는 프론트엔드 개발자 이정현의 포트폴리오입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "이정현 포트폴리오",
    title: "이정현 | 프론트엔드 개발자 포트폴리오",
    description: "사용자 흐름을 이해하고, API와 데이터 상태를 연결해 작동하는 화면을 만듭니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "이정현 | 프론트엔드 개발자 포트폴리오",
    description: "사용자 흐름을 이해하고, API와 데이터 상태를 연결해 작동하는 화면을 만듭니다.",
  },
  icons: {
    icon: [{ url: `${basePath}/favicon.svg`, type: "image/svg+xml" }],
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* JS가 켜진 경우에만 등장 애니메이션 대상을 숨김 (JS가 없으면 그대로 보임) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
