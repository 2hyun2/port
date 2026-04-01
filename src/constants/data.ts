export const PORTFOLIO_DATA = {
  categories: [
    {
      id: "api",
      title: "API & System Design",
      description: "인하우스 프론트엔드 개발 및 시스템 설계 협업",
      projects: [
        {
          title: "카페24 front API 기반 4-Depth 카테고리 리뉴얼",
          summary: "855개의 카테고리 하드코딩 =>  실시간 동기화 GNB 시스템 구축",
          details: [
            "new Map() 자료구조를 이용한 데이터 탐색 성능 최적화",
            "부모-자식 관계를 new Map 데이터를 활용해 재귀형 Root 객체로 변환",
            "createDocumentFragment를 활용한 렌더링 선능 최적화",
            "e.target.closest() 를 이용한 이벤트 위임 및 addEventListener 메모리 최소화",
          ]
        },
        {
          title: "구글 스프레드시트 연동 배송가능 지역 조회 시스템",
          summary: "유동적인 배송 가능 지역 데이터를 관리하기 위해 구글 스프레드시트를 DB로 활용한 검색 모듈 개발",
          details: [
            "fetch api를 사용 외부 CSV 데이터 소스 로드 및 동기화",
            "'\n', ','를 기준으로 배열화 및 공백을 기준으로 한 배열화 ex: '서울 강남구 역삼동' => ['서울', '강남구', '역삼동']",
            "주소를 | 로 엮어 고유한 Key를 만들어 Prefix Indexing 데이터 생성",
            "운영팀에서 개발팀에 의한 데이터 업로드가 아닌 스스로 업데이트 가능한 생태계 조성"
          ]
        },
        {
          title: "공공데이터 Open API 기반 병원/요양시설 통합 등록 시스템",
          summary: "심사평가원 및 건강보험공단 API를 연동하여 전국 의료기관 데이터 조회 및 CRUD 및 DB화 프로세스 구축",
          details: [
            "Promise.All으로 10여 개의 상세 정보 API 호출 최적화",
            "DOMParser, Array.reduce를 활용한 XML => JSON 데이터화 및 중복 처리",
            "kakao, naver Map api를 활용 Geocoding, map Rendering 기능 구현",
            "사용자의 추가 입력값과 불러온 API 데이터를 결합 하여 POST 기능 개발"
          ]
        }
      ]
    },
    {
      id: "node",
      title: "Node.js & Data Engineering",
      description: "데이터 구조화 및 효율적인 파이프라인 설계",
      projects: [
        {
          title: "이카운트 ERP API 기반 실시간 재고 관리 대시보드 구축",
          summary: "Node.js 백엔드를 구축하여 ERP 재고 데이터와 자사몰 상품 매핑 데이터를 제공",
          details: [
            "Node.js Express 환경에서 이카운트 API 연동 및 자사몰 데이터(.csv) 전처리 설계",
            "Promise.All를 활용한 재고 데이터 병렬 수집 및 동기화 시간 단축",
            "데이터 요청시 요청 타임을 기억해 지정 타임마다 기존 데이터 제공으로 API 부하 감소 및 시스템 안정성 확보",
            "프론트 데이터 정렬 (Sorting), search Debounce 기술을 적용하여 검색 최적화",
            "데이터를 로컬스토리지에 담아 새로고침을 해도 지정 타임 데이터 복구",
          ]
        }
      ]
    },
    {
      id: "script",
      title: "Advanced Scripting",
      description: "Vanilla JS 및 비즈니스 로직 최적화",
      projects: [
        {
          title: "클라이언트 사이드 권한 제어(Guard) 및 동적 로그인 리다이렉트 구현",
          summary: "DOM 속성을 활용한 역할 제어와 returnUrl을 통한 사용자 경험(UX) 최적화 로직 개발",
          details: [
            "HTML data-grade 속성을 파싱하여 메뉴별 접근 가능 등급(배열)을 검증하는 클라이언트 사이드 권한 체크 로직 구현",
            "비로그인 사용자의 보호된 라우트 접근 시 Event.preventDefault()로 이동을 차단하고 로그인 페이지로 유도",
            "사용자의 목적지 URL을 encodeURIComponent로 인코딩하여 returnUrl 파라미터로 전달, 로그인 후 원래 페이지로 복귀하도록 사용자 흐름 이탈 방지",
            "DOM 요소(#htmlUserGroup)에 렌더링된 사용자 등급과 메뉴 권한을 비교 대조하고, 관리자(Admin) 예외 처리(Bypass) 적용"
          ]
        },
        {
          title: "카페24 게시판 엔진 커스텀 기반 '품목 매핑 관리 시스템'",
          summary: "표준 게시판의 한계를 극복하기 위해 에디터를 데이터 저장소(JSON)로 활용, 복잡한 비즈니스 로직을 처리할 수 있는 전용 관리 솔루션을 구축",
          details: [
            "입력값을 JSON 문자열로 직렬화하여 저장하는 Headless 방식 인터페이스 구현",
            "전체 페이지 비동기 스캔 알고리즘을 통한 실시간 상태 집계 대시보드 구축",
            "CRUD 전 과정에서 데이터 유실 방지를 위한 패킹/언패킹 로직 공통화"
          ]
        },
      ]
    },
    {
      id: "publishing",
      title: "Responsive Publishing & Refactoring",
      description: "단일 소스 기반의 전사 반응형 웹 시스템 전환 및 아키텍처 최적화",
      projects: [
        {
          title: "전사 반응형(Responsive) 통합 리뉴얼 및 레거시 코드 리팩토링",
          summary: "PC/모바일로 분리되어 있던 적응형 레거시를 단일 소스(Single Source)로 통합하여 유지보수 생산성과 UI/UX 일관성을 극대화했습니다.",
          details: [
            "미디어 쿼리(Media Queries)와 가변 그리드(Fluid Grid)를 활용한 뷰포트 맞춤형 UI 아키텍처 재설계",
            "파편화된 스크립트를 중앙 집중화하고 이벤트 위임(Event Delegation)을 적용하여 DOM 메모리 점유율 최적화",
            "중복 로직(탭, 모달 등)의 공통 컴포넌트 모듈화를 통한 코드 베이스 축소 및 유지보수성 대폭 향상",
            "디바이스 해상도별 srcset 적용으로 모바일 데이터 소모량 감소 및 로딩 속도 최적화",
            "기기별 URL 통합을 통한 검색 엔진 최적화(SEO) 강화 및 데이터 정합성 이슈 원천 차단"
          ]
        }
      ]
    }
  ]
};