import type { Metadata } from "next";

import "./css/reset.css"
import "./css/globals.css"
import "./css/layout.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frontend Portfolio",
  description: "사용자 흐름과 데이터 상태를 구현하는 프론트엔드 포트폴리오",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
