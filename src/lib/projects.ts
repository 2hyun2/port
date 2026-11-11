export type Project = {
  slug: string;
  number: string;
  kind: string;
  title: string;
  summary: string;
  focus: string;
  implementation: string;
  progressNote?: string;
  siteUrl?: string;
  repositoryUrl?: string;
  repositoryLabel?: string;
  stackLabel?: string;
  stackStatus?: "used" | "planned";
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
    siteUrl: "https://medistorage.kr/",
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
  { slug: "badminton-app", number: "03", kind: "실시간 웹앱", title: "배드민턴 동호회 웹앱", summary: "출석부터 실시간 매칭, 경기 기록과 랭킹까지 연결한 웹앱", focus: "여러 사람이 보는 현재 상태를 하나의 흐름으로 연결하고, 운영자가 즉시 판단할 수 있는 화면을 구성했습니다.", implementation: "회원, 출석, 매칭, 경기 기록 데이터를 REST API로 연결하고, 각 요청 결과와 실시간 상태 변화가 화면에 이어지도록 구성했습니다.", progressNote: "현재 구현과 검증을 진행 중인 개인 프로젝트입니다.", repositoryUrl: "https://github.com/2hyun2/badminton-webapp", stack: ["React", "React Query", "Zustand", "Socket.io", "REST API", "Node.js", "Express", "MongoDB"], flow: ["출석 확인", "실시간 매칭", "경기 기록", "랭킹 반영"] },
  {
    slug: "storage-basket",
    number: "04",
    kind: "VIBE CODING",
    title: "우리집 공간록",
    summary: "AI와 협업해 화면, 상태, API, 데이터베이스를 연결한 위치 기반 물건 관리 웹앱",
    focus: "AI가 구현 초안과 탐색을 돕고, 요구사항 분해·구조 결정·예외 처리·검증은 직접 맡아 물건을 찾는 과정을 단순하게 만들었습니다.",
    implementation: "위치 트리에서 현재 선택한 범위와 물건 원본 데이터를 분리하고, 검색과 정렬 조건에 맞춰 보이는 결과를 구성했습니다.",
    siteUrl: "https://storage-basket.vercel.app/",
    stack: ["React", "Vite", "Tailwind CSS", "Zustand", "Express", "Supabase", "Codex"],
    flow: ["위치 선택", "하위 위치 필터", "검색·정렬", "물건 확인"],
    workItems: [
      {
        title: "AI와 역할을 나누며 구현",
        summary: "AI가 초안과 탐색을 돕게 하고, 요구사항을 기능 단위로 나누는 일과 구조 결정, 실제 동작 검증은 직접 맡았습니다.",
        details: [
          "위치 선택, 하위 위치 필터, 검색과 정렬, 물건 등록과 수정 흐름 구성",
          "Codex를 활용해 React 화면과 Zustand 상태를 기능 단위로 연결",
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
  {
    slug: "badminton-club-platform",
    number: "05",
    kind: "신규 플랫폼 · 개발 예정",
    title: "배드민턴 동호회 운영 플랫폼",
    summary: "여러 동호회의 회원, 게스트, 출석, 경기, 회비와 공개 홈페이지를 관리하는 웹·앱 플랫폼",
    focus: "기존 단일 동호회 운영 웹앱과 별개로, 여러 동호회의 소속·권한·운영 규칙을 처음부터 설계하고 있습니다.",
    implementation: "사용자 흐름과 권한 정책, 데이터 모델을 먼저 정리하고 Next.js 웹 기반과 초기 진입 UI를 만들고 있습니다. 이후 웹·API·모바일이 공통 타입과 도메인 규칙을 공유할 수 있도록 모노레포 구조로 확장할 예정입니다.",
    progressNote: "사용자 흐름, 권한 정책, 데이터 모델과 구현 로드맵을 정리하고 Next.js 웹 기반과 초기 진입 UI를 구현했습니다. 이후 API와 React Native 앱을 공통 타입과 도메인 규칙으로 묶는 모노레포 확장을 계획합니다. 2026년 안에 웹 MVP 공개를 목표로 합니다.",
    repositoryUrl: "https://github.com/2hyun2/badminton-club-platform",
    repositoryLabel: "GitHub에서 설계 문서 보기",
    stackLabel: "예정 기술 구성",
    stackStatus: "planned",
    stack: ["Next.js", "Node.js", "Express", "Socket.io", "PostgreSQL", "React Native", "AWS"],
    flow: ["동호회 탐색", "가입·게스트 신청", "운영 기능", "웹·앱 확장"],
    workItems: [
      {
        title: "여러 동호회를 위한 구조 설계",
        summary: "한 앱 회원이 여러 동호회에 소속될 수 있는 플랫폼을 전제로, 회원과 동호회, 소속 정보를 분리했습니다.",
        details: [
          "동호회별 권한, 등급, 레이팅, 회비 상태를 소속 정보 단위로 관리",
          "공개 동호회 홈페이지와 로그인 뒤 운영 화면을 하나의 서비스 흐름으로 설계",
        ],
      },
      {
        title: "게스트 흐름과 개인정보 기준",
        summary: "정식 회원과 비회원 게스트 신청을 구분하고, 운영에 필요한 정보만 남도록 데이터 흐름을 설계했습니다.",
        details: [
          "게스트 신청과 동호회 가입을 별도 흐름으로 분리",
          "비회원 게스트의 식별 정보는 운동 종료 뒤 정리할 수 있도록 보관 기준 설정",
        ],
      },
      {
        title: "웹 MVP와 모노레포 확장",
        summary: "Next.js 웹 기반에서 초기 흐름을 만들고, 웹·API·모바일이 공통 타입과 도메인 규칙을 공유하는 모노레포 구조로 확장할 계획입니다.",
        details: [
          "웹, API, 모바일을 역할별로 나누고 공통 타입·도메인 규칙을 공유하는 구조 설계",
          "웹에서 검증한 권한과 운영 규칙을 API와 앱에서도 같은 계약으로 사용하도록 구성",
        ],
      },
    ],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
