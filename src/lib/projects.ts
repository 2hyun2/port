export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  device?: "desktop" | "mobile";
};

export type ProjectWorkItem = {
  title: string;
  /** 문제와 제약, 그리고 그래서 내린 결정 */
  summary: string;
  /** 구체적인 구현과 결과 */
  details: string[];
};

export type Project = {
  slug: string;
  /** 예전에 공유한 주소가 계속 열리도록 남겨 두는 이전 slug */
  aliases?: string[];
  number: string;
  kind: string;
  title: string;
  summary: string;
  /** 메인 카드의 "주요 고민" */
  focus: string;
  progressNote?: string;
  links?: ProjectLink[];
  stackLabel?: string;
  stack: string[];
  images?: ProjectImage[];
  workItems: ProjectWorkItem[];
};

const image = (file: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/projects/${file}`;

export const projects: Project[] = [
  {
    slug: "medical-commerce",
    number: "01",
    kind: "운영 서비스 · 프론트엔드",
    title: "의료용품 커머스 웹서비스",
    summary: "Cafe24 기본 모듈로 부족한 기능을 Front API로 직접 구현해 운영한 의료용품 커머스",
    focus: "Cafe24 모듈은 쓸 수 있는 개수와 형태가 정해져 있어, 855개 카테고리를 한 번에 보여 주거나 마이페이지·게시판을 원하는 형태로 바꾸기 어려웠습니다. 모듈로 안 되는 부분은 Front API로 데이터를 직접 불러와 화면을 만들었습니다.",
    links: [{ label: "서비스 열기", href: "https://medistorage.kr/" }],
    stack: ["HTML", "CSS", "JavaScript", "Cafe24 Front API"],
    images: [
      { src: image("medistorage-category.jpg"), alt: "의료창고 전체 카테고리 메뉴", caption: "상황별·제품별·제조사별로 나눈 전체 카테고리 메뉴", device: "desktop" },
      { src: image("medistorage-desktop.jpg"), alt: "의료창고 메인 화면", caption: "메인 배너와 상황별 바로가기", device: "desktop" },
      { src: image("medistorage-delivery-mobile.jpg"), alt: "의료창고 응급배송 안내 모바일 화면", caption: "직접 만든 응급배송 안내 · 모바일", device: "mobile" },
    ],
    workItems: [
      {
        title: "없던 전체 카테고리 메뉴를 API로 구현",
        summary: "855개 카테고리를 한눈에 볼 수 있는 메뉴가 아예 없어서, 원하는 품목을 찾으려면 카테고리를 하나씩 타고 들어가야 했습니다. Front API로 카테고리 트리를 불러와 상황별·제품별·제조사별 전체 메뉴를 만들었습니다.",
        details: [
          "855개 카테고리를 API로 불러와 한 화면의 전체 메뉴로 구성",
          "상위 분류를 펼쳐 바로 하위 품목까지 이동",
          "관리자에서 카테고리를 바꾸면 메뉴에 바로 반영",
        ],
      },
      {
        title: "모듈로 안 되는 화면은 직접 구현",
        summary: "모듈만으로는 원하는 형태를 만들 수 없는 화면이 많았습니다. 필요한 데이터는 API로 불러오고 화면은 직접 만들어 운영 요구에 맞췄습니다.",
        details: [
          "당일 응급배송 안내 페이지 제작 (주문 마감, 수령 방법, 자주 묻는 질문)",
          "마이페이지 리뉴얼",
          "상품 구매 시 조건에 맞춰 동작이 자동으로 적용되는 기능",
          "PC와 모바일 두 벌로 나뉘어 있던 화면을 반응형 한 벌로 통합해 수정할 곳을 절반으로 줄임",
        ],
      },
      {
        title: "기본 게시판을 JSON 데이터 기반 게시판으로",
        summary: "Cafe24 기본 게시판은 구조와 디자인을 바꾸기 어려웠습니다. 게시판 내용을 JSON 데이터로 정리하고, 그 데이터를 읽어 그리는 정적 게시판으로 다시 만들어 보기 좋고 찾기 쉬운 화면으로 바꿨습니다.",
        details: [
          "게시판 내용을 JSON으로 구조화",
          "데이터를 읽어 화면을 그리는 방식이라 디자인과 구성을 자유롭게 변경",
        ],
      },
      {
        title: "문서에 없던 로그인 복귀 로직을 직접 찾아 구현",
        summary: "로그인하면 메인으로 돌아가 보던 상품을 다시 찾아야 했습니다. 관련 정보가 문서에 없어 Cafe24 로그인 과정을 직접 추적해 returnURL을 처리하는 방법을 찾았고, 로그인 후 원래 보던 화면으로 돌아가게 했습니다.",
        details: [
          "로그인 전 위치를 returnURL로 넘겨 로그인 후 복귀",
          "상품 등록·수정 시 필수 정보 누락을 줄이는 관리 기능 구성",
        ],
      },
    ],
  },
  {
    slug: "inventory-tool",
    number: "02",
    kind: "사내 도구 · API 연동",
    title: "ERP 재고 조회 도구",
    summary: "내부 코드에 접근할 수 없는 환경에서, API만으로 상품·옵션·재고를 모으고 어긋난 데이터를 맞춰 한 화면에 보여 준 조회 도구",
    focus: "재고를 확인하려면 ERP에 직접 들어가 상품을 하나씩 검색해야 했습니다. ERP와 자사몰의 내부 코드는 볼 수 없어 API만으로 데이터를 모았고, 형식이 제각각인 데이터를 비교·매칭해 한 화면에서 재고를 확인하도록 만들었습니다.",
    progressNote: "사내 시스템이라 화면과 코드는 공개하지 않고, 구조와 결정 과정만 정리했습니다.",
    stack: ["JavaScript", "Node.js", "Express", "Cafe24 API", "ERP API"],
    workItems: [
      {
        title: "코드 없이 API만으로 데이터 연결",
        summary: "필요한 정보가 여러 API에 나뉘어 있었습니다. 서로 의존하지 않는 호출은 Promise.all로 한 번에 불러오고, 앞 응답의 값이 필요한 호출만 순서대로 불러 응답을 하나의 조회 결과로 합쳤습니다.",
        details: [
          "독립적인 호출은 Promise.all로 병렬 처리해 대기 시간 단축",
          "앞 응답이 필요한 호출만 순차로 처리",
        ],
      },
      {
        title: "정형화되지 않은 데이터를 직접 맞춤",
        summary: "데이터 형식이 통일돼 있지 않았고, 담당자가 자주 바뀌면서 입력 기준도 달라져 값이 정확하지 않은 경우가 많았습니다. 시스템 간 데이터를 직접 비교해 같은 상품을 찾아 매칭하고 병합했습니다.",
        details: [
          "시스템마다 다른 상품 표기와 기준을 비교해 매칭",
          "엑셀로 관리되던 자료도 읽어 와 함께 가공·병합",
          "어긋난 값을 정리해 하나의 목록으로 병합",
        ],
      },
      {
        title: "ERP에서 하나씩 찾던 작업을 한 화면으로",
        summary: "MD·CS는 문의가 올 때마다 ERP에 들어가 상품을 하나씩 검색했습니다. 검색·정렬과 최근 조회 상태를 한 화면에 두어 반복 검색을 줄였습니다.",
        details: [
          "상품명·옵션 조건 검색과 정렬",
          "최근 조회 상태를 유지해 같은 상품을 다시 찾는 단계 축소",
          "업무 권한에 맞춰 조회 범위 구분",
        ],
      },
    ],
  },
  {
    slug: "storage-basket",
    number: "03",
    kind: "개인 프로젝트 · 풀스택",
    title: "우리집 공간록",
    summary: "집 구조를 3D로 배치하고, 가족과 함께 물건 위치를 기록하고 찾는 Next.js 풀스택 웹앱",
    focus: "물건은 '거실 > 수납장 > 2번째 칸'처럼 계층 안에 들어 있고, 여러 사람이 같은 집을 함께 기록합니다. 위치 트리와 공동체별 데이터가 꼬이지 않도록 규칙을 DB와 서버에서 함께 지키고, 테스트 19개로 회귀를 막았습니다.",
    links: [
      { label: "서비스 열기", href: "https://storage-basket.vercel.app/" },
      { label: "GitHub에서 코드 보기", href: "https://github.com/2hyun2/storage-basket" },
    ],
    stack: ["Next.js", "TypeScript", "React", "TanStack Query", "Zustand", "Zod", "Supabase", "PostgreSQL", "Three.js", "React Three Fiber", "Tailwind CSS"],
    images: [
      { src: image("storage-basket-desktop.jpg"), alt: "우리집 공간록 첫 화면", caption: "첫 화면과 3D 공간 배치 예시", device: "desktop" },
      { src: image("storage-basket-mobile.jpg"), alt: "우리집 공간록 모바일 화면", caption: "모바일", device: "mobile" },
    ],
    workItems: [
      {
        title: "React·Express에서 Next.js로 전환",
        summary: "처음에는 React(Vite) 화면과 Express API를 따로 배포했습니다. 화면과 API를 한 프로젝트에서 관리하고 서버 전용 키를 안전하게 쓰기 위해 Next.js App Router와 Route Handler로 옮기고 Vercel로 배포했습니다. 기존 Supabase 데이터와 제품 규칙은 그대로 유지했습니다.",
        details: [
          "화면과 API를 하나의 Next.js 프로젝트로 통합, GitHub 푸시 시 Vercel 자동 배포",
          "위치 트리, 이름 중복 금지 같은 기존 규칙과 실제 데이터를 유지한 채 전환",
          "DB 변경은 Supabase 마이그레이션 24개로 이력 관리",
        ],
      },
      {
        title: "AI 초안이 놓친 트리 예외를 직접 찾아 막음",
        summary: "AI로 만든 초안은 기본 동작은 됐지만, 위치를 자기 하위 위치로 옮기면 트리가 순환하고 같은 위치에 같은 이름이 중복되는 문제가 있었습니다. 데이터를 실제로 옮겨 보며 찾아내고 규칙을 추가했습니다.",
        details: [
          "위치를 자기 하위로 옮기는 변경을 서버 규칙으로 차단해 순환 트리 방지",
          "같은 위치 안 이름 중복 검사",
          "입력값을 화면뿐 아니라 서버에서도 검증",
        ],
      },
      {
        title: "3D 격자 위에 집 구조 배치",
        summary: "물건 위치를 글로만 기록하면 실제 집 구조와 연결이 잘 안 됩니다. Three.js와 React Three Fiber로 3D 격자 위에 방과 수납공간을 배치하고, 배치한 공간 안에 물건을 이어서 기록하도록 했습니다.",
        details: [
          "10cm 격자에 맞춰 이동하고 부모 공간 밖으로 나가지 않도록 제한",
          "벽과 옆 공간의 경계에 자동으로 붙고, 크기 조절 시 반대쪽 모서리 고정",
          "배치한 방·수납공간을 위치 트리와 연결",
        ],
      },
      {
        title: "가족이 함께 쓰는 공동체와 데이터 격리",
        summary: "집은 혼자 쓰지 않으니 가족을 초대해 같은 공간을 함께 기록하도록 공동체 기능을 만들었습니다. 다른 공동체의 데이터가 섞이지 않도록 DB 접근 정책으로 격리하고, 조회 캐시도 공동체별로 분리했습니다.",
        details: [
          "공동체 초대와 구성원 관리",
          "Supabase 접근 정책으로 공동체 간 데이터 격리",
          "조회 캐시를 공동체별로 분리하고, 계정을 전환하면 이전 계정의 조회는 중단",
        ],
      },
      {
        title: "테스트 19개와 AI 작성·검증 분리",
        summary: "기능이 늘수록 이미 고친 문제가 다시 생겼습니다. 3D 배치, 화면 회귀, DB 보안을 테스트로 고정하고, AI는 코드를 쓰는 쪽과 검증하는 쪽을 나눠 서로의 결과를 대조하게 했습니다.",
        details: [
          "3D 배치 6개, 화면 회귀 12개, DB 보안 1개 테스트 (node:test)",
          "DB 보안 테스트는 PGlite에 전체 마이그레이션을 적용해 공동체 격리·계층 규칙을 검증",
          "Claude는 작성, Codex는 lint·build·test와 diff 대조로 검증하도록 결정 기록에 고정",
        ],
      },
    ],
  },
  {
    slug: "badminton",
    aliases: ["badminton-app", "badminton-club-platform"],
    number: "04",
    kind: "개인 프로젝트 · v1 웹앱 → v2 플랫폼",
    title: "배드민턴 동호회 운영 서비스",
    summary: "내 동호회를 위해 만든 실시간 운영 웹앱에서 출발해, 여러 동호회가 각자 쓰는 플랫폼으로 다시 설계하고 있는 프로젝트",
    focus: "v1은 제가 속한 동호회 하나를 기준으로 만들었지만, 동호회에서 도입을 원하지 않아 보류됐습니다. 한 곳에 맞춘 서비스는 그곳의 결정 하나로 멈출 수 있다는 걸 겪고, v2는 여러 동호회가 각자 가입해 쓰는 플랫폼으로 방향을 바꿔 구조부터 다시 설계하고 있습니다.",
    progressNote: "v1은 소속 동호회의 도입 보류로 개발을 멈췄고, v2는 설계 문서와 Next.js·TypeScript 웹 기반을 만든 단계입니다.",
    links: [
      { label: "v1 코드 보기", href: "https://github.com/2hyun2/badminton-webapp" },
      { label: "v2 설계 문서 보기", href: "https://github.com/2hyun2/badminton-club-platform" },
    ],
    stackLabel: "v1 사용 기술",
    stack: ["React", "TanStack Query", "Zustand", "Socket.io", "Node.js", "Express", "MongoDB"],
    workItems: [
      {
        title: "v1 · 출석부터 랭킹까지 실시간 연결",
        summary: "운영자는 출석한 사람을 보면서 바로 다음 경기를 짜야 했습니다. 출석·매칭·경기 기록을 REST API로 저장하고, 상태가 바뀌면 Socket.io로 모든 사람의 화면에 즉시 반영되게 했습니다.",
        details: [
          "서버 데이터는 TanStack Query, 화면 상태는 Zustand로 나눠 관리",
          "출석 → 매칭 → 경기 기록 → 랭킹 반영이 한 번에 이어지도록 구성",
        ],
      },
      {
        title: "보류에서 얻은 방향 전환",
        summary: "v1은 한 동호회의 운영 방식에 맞춰져 있어서, 그 동호회가 쓰지 않기로 하자 쓸 곳이 사라졌습니다. 특정 동호회에 기대지 않도록, 어느 동호회든 가입해서 각자의 규칙대로 쓰는 플랫폼으로 범위를 바꿨습니다.",
        details: [
          "단일 동호회 전용 앱 → 여러 동호회가 함께 쓰는 플랫폼",
          "동호회마다 다른 운영 규칙을 담을 수 있는 구조가 필요해짐",
        ],
      },
      {
        title: "v2 · 소속 정보 분리와 게스트 기준",
        summary: "한 사람이 여러 동호회에 속할 수 있도록 회원과 동호회 사이에 소속 정보를 두고, 권한·등급·레이팅·회비 상태를 소속 단위로 관리하도록 설계했습니다.",
        details: [
          "게스트 신청과 동호회 가입을 별도 단계로 분리",
          "비회원 게스트의 식별 정보는 운동이 끝난 뒤 정리하도록 보관 기준 설정",
          "공개 동호회 홈페이지와 로그인 뒤 운영 화면을 하나의 서비스로 설계",
        ],
      },
      {
        title: "v2 · 웹 MVP와 모노레포 확장 (예정)",
        summary: "Next.js 웹에서 초기 기능을 검증한 뒤, 웹·API·모바일이 공통 타입과 도메인 규칙을 공유하는 모노레포로 확장할 계획입니다.",
        details: [
          "예정 기술: Next.js, TypeScript, PostgreSQL, React Native, AWS",
          "웹에서 검증한 권한·운영 규칙을 API와 앱에서도 같은 계약으로 사용",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug || project.aliases?.includes(slug));
}
