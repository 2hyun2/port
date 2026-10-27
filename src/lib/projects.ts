export type Project = {
  slug: string;
  number: string;
  kind: string;
  title: string;
  summary: string;
  focus: string;
  implementation: string;
  siteUrl?: string;
  stack: string[];
  flow: string[];
  workItems?: {
    title: string;
    summary: string;
    details: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "medical-commerce",
    number: "01",
    kind: "운영 서비스",
    title: "의료용품 커머스 웹서비스",
    summary: "상품 탐색부터 프로모션, 배송 안내까지 운영한 의료용품 커머스 서비스",
    focus: "많은 상품과 카테고리, 프로모션 정보를 사용자가 다음 행동으로 자연스럽게 이어갈 수 있는 화면 흐름으로 정리했습니다.",
    implementation: "카테고리, 기획전, 추천 상품, 배송 안내처럼 성격이 다른 화면을 하나의 서비스 경험으로 연결하고 반응형 구조로 다듬었습니다.",
    stack: ["HTML", "CSS", "JavaScript", "Cafe24 Front API"],
    flow: ["카테고리 탐색", "상품 발견", "혜택 확인", "배송 안내"],
    workItems: [
      {
        title: "카테고리와 상품 탐색",
        summary: "운영 중인 많은 품목을 메뉴와 상품 탐색 화면에 자연스럽게 연결했습니다.",
        details: [
          "855개 카테고리를 운영 데이터에 맞춰 메뉴에 자동 반영",
          "많은 항목에서도 원하는 품목을 찾기 쉬운 탐색 구조 구성",
        ],
      },
      {
        title: "메인과 기획전 상품 노출",
        summary: "상황에 맞는 상품, 기획전, 배너, 추천 상품이 메인에서 함께 보이도록 구현했습니다.",
        details: [
          "여러 상품 노출 영역을 운영 목적에 맞게 구성",
          "PC와 모바일에 나뉘어 있던 화면을 하나의 반응형 구조로 정리",
        ],
      },
      {
        title: "배송 안내와 구매 지원",
        summary: "구매 전에 알아야 할 배송 조건과 수령 방법을 별도 화면에서 명확하게 안내했습니다.",
        details: [
          "당일 응급배송의 주문 마감과 수령 방법, 배송 조건 안내",
          "배송 관련 자주 묻는 질문을 함께 제공",
        ],
      },
      {
        title: "회원 흐름과 운영 기능",
        summary: "로그인 이후에도 사용자가 보던 화면으로 돌아가고, 운영 중 정보 누락을 줄이도록 다듬었습니다.",
        details: [
          "회원 상태와 상품 정보를 화면에 맞게 불러오는 흐름 개선",
          "품목 정보의 등록과 수정 과정에서 누락을 줄이는 관리 기능 구성",
        ],
      },
    ],
  },
  { slug: "inventory-tool", number: "02", kind: "사내 도구", title: "ERP 재고 조회 도구", summary: "상품·옵션·재고 정보를 한 화면에서 찾는 업무 지원 도구", focus: "조회 조건과 업무 권한을 고려해, 필요한 상품 정보를 빠르게 확인할 수 있는 검색 인터페이스를 만들었습니다.", implementation: "ERP 재고와 자사몰 상품 정보를 연결하고 검색과 정렬, 최근 조회 상태를 통해 MD·CS 업무 흐름을 줄였습니다.", stack: ["JavaScript", "Node.js", "Express", "ERP API"], flow: ["조건 확인", "상품·옵션 검색", "재고 조회", "업무 대응"] },
  { slug: "badminton-app", number: "03", kind: "실시간 웹앱", title: "배드민턴 동호회 웹앱", summary: "출석부터 실시간 매칭, 경기 기록과 랭킹까지 연결한 웹앱", focus: "여러 사람이 보는 현재 상태를 하나의 흐름으로 연결하고, 운영자가 즉시 판단할 수 있는 화면을 구성했습니다.", implementation: "회원 상태, 실시간 매칭, 경기 결과와 랭킹 반영을 각 기능의 상태 변화에 맞춰 연결했습니다.", stack: ["React", "React Query", "Zustand", "Socket.io"], flow: ["출석 확인", "실시간 매칭", "경기 기록", "랭킹 반영"] },
  {
    slug: "storage-basket",
    number: "04",
    kind: "VIBE CODING",
    title: "수납바구니",
    summary: "Codex와 대화하며 화면, 상태, API, 데이터베이스까지 연결한 위치 기반 물건 관리 웹앱",
    focus: "방·가구·서랍처럼 중첩되는 위치 구조와 검색·정렬·선택 상태를 나눠, 물건을 찾는 과정을 단순하게 만들었습니다.",
    implementation: "위치 트리에서 현재 선택한 범위와 물건 원본 데이터를 분리하고, 검색과 정렬 조건에 맞춰 보이는 결과를 구성했습니다.",
    siteUrl: "https://storage-basket.vercel.app/",
    stack: ["React", "Vite", "Tailwind CSS", "Zustand", "Express", "Supabase", "Codex"],
    flow: ["위치 선택", "하위 위치 필터", "검색·정렬", "물건 확인"],
    workItems: [
      {
        title: "Codex로 기능을 쪼개고 구현",
        summary: "기능을 한 번에 만들기보다 위치, 물건, 검색처럼 작은 단위로 나누고 Codex와 대화하며 화면과 로직을 반복해서 만들었습니다.",
        details: [
          "위치 선택, 하위 위치 필터, 검색과 정렬, 물건 등록과 수정 흐름 구성",
          "Codex를 사용해 React 화면과 Zustand 상태를 기능 단위로 연결",
        ],
      },
      {
        title: "화면을 넘어 서버와 데이터까지 연결",
        summary: "UI만 만든 데서 끝내지 않고 Express API와 Supabase 데이터베이스를 연결해 실제 데이터가 오가는 흐름을 완성했습니다.",
        details: [
          "물건과 위치 정보를 저장하고 다시 불러오는 API 구성",
          "입력값을 서버에서도 검증하도록 처리",
        ],
      },
      {
        title: "생성된 코드의 예외를 계속 수정",
        summary: "Codex가 만든 초안을 그대로 두지 않고, 위치 데이터가 꼬일 수 있는 상황을 실제로 돌려 보며 규칙을 보완했습니다.",
        details: [
          "같은 위치 안에서 이름이 중복되지 않도록 처리",
          "자기 하위 위치로 이동하는 잘못된 트리 변경 차단",
        ],
      },
    ],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
