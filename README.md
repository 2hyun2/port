# 이정현 포트폴리오

API와 데이터를 연결해 실제로 운영되는 서비스를 만드는 웹 개발 3년 차 프론트엔드 개발자 이정현의 포트폴리오입니다.

**사이트:** https://2hyun2.github.io/port/

## 담긴 내용

| # | 프로젝트 | 구분 | 핵심 |
|---|---|---|---|
| 01 | 의료용품 커머스 웹서비스 | 운영 서비스 | Cafe24 모듈 한계를 Front API로 직접 구현, 855개 카테고리 전체 메뉴, 로그인 복귀 로직 |
| 02 | ERP 재고 조회 도구 | 사내 도구 | 내부 코드 없이 API 병렬·순차 호출, 어긋난 데이터를 직접 매칭해 재고를 한 화면에 |
| 03 | [우리집 공간록](https://github.com/2hyun2/storage-basket) | 개인 · 풀스택 | Next.js + TypeScript + Supabase, 3D 공간 배치, 공동체 데이터 격리, 테스트 19개, React·Express에서 Next.js로 전환 |
| 04 | 배드민턴 동호회 운영 서비스 | 개인 · v1 → v2 | 단일 동호회 실시간 웹앱의 보류 경험을 바탕으로 멀티 동호회 플랫폼으로 재설계 |

메인의 **AI와 일하는 방식** 섹션에는 회사에서 엑셀 수작업을 Node.js 자동화로 5~20배 단축한 사례, AI 초안의 예외를 직접 잡은 사례, 작성하는 AI와 검증하는 AI를 나눈 결정 기록을 정리했습니다.

이 밖에 에이전시 시절 퍼블리싱한 기업·기관 사이트 아카이브와 피드백 폼이 있습니다.

## 기술 구성

- **Next.js (App Router)** + **TypeScript**, `output: "export"`로 정적 사이트 생성
- 프로젝트 내용은 `src/lib/projects.ts`, 퍼블리싱 아카이브는 `src/lib/publishing.ts` 데이터로 관리
- 상세 페이지는 `generateStaticParams`로 프로젝트마다 정적 생성 (예전 주소는 `aliases`로 유지)
- GitHub Actions로 `main` 푸시 시 GitHub Pages에 자동 배포 (`.github/workflows/deploy.yml`)
- 피드백 폼은 Formspree로 전송 (`NEXT_PUBLIC_FORMSPREE_FEEDBACK_FORM_ID`)

## 로컬 실행

```bash
npm ci
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다. 정적 빌드는 `npm run build` 후 `out/` 폴더에 생성됩니다.

## 연락

- 이메일: eventietter@naver.com
- GitHub: https://github.com/2hyun2
