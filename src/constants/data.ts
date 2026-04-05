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
            "createDocumentFragment를 활용한 렌더링 성능 최적화",
            "e.target.closest() 를 이용한 이벤트 위임 및 addEventListener 메모리 최소화",
          ]
        },
        {
          title: "구글 스프레드시트 연동 배송가능 지역 조회 시스템",
          summary: "유동적인 배송 가능 지역 데이터를 관리하기 위해 구글 스프레드시트를 DB로 활용한 검색 모듈 개발",
          details: [
            "fetch api를 사용 외부 CSV 데이터 소스 로드 및 동기화",
            "'공백', '쉼표'를 기준으로 배열화 및 공백을 기준으로 한 배열화 ex: '서울 강남구 역삼동' => ['서울', '강남구', '역삼동']",
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

export const PORTFOLIO_DATA2 = {
  publishing: [
    {
      title: "DNL Logis",
      href: "https://dnl.dnllogis.com/",
      description: "복잡한 물류/정산 데이터의 시각화 및 UX 최적화",
      src: "/images/dnl.png",
      details: [
        {
          "title": '수백 개의 화물 리스트와 복잡한 정산 데이터를 사용자가 한눈에 파악할 수 있도록 시스템과 데이터 시각화를 구현',
          "desc": '반응형 작업 시에도 가독성 높은 데이터 시각화 적용',
        },
        {
          "title": '실시간성 및 상태 변화 대응',
          "desc": '실시간 데이터 업데이트에 따른 UI 상태 변화 처리',
        },
        {
          "title": '멀티 디바이스 최적화',
          "desc": '사무실 환경(Web)과 운전 환경(App)이라는 서로 다른 사용자의 사용 패턴을 고려한 인터페이스 최적화',
        },
      ],
    },
    {
      title: "삼성중공업 ",
      href: "https://www.samsungshi.com/",
      description: "레거시(.aspx) 환경에서의 웹 표준 및 호환성 확보",
      src: "/images/samsung.jpg",
      details: [
        {
          "title": '폐쇄적 환경(Legacy)에서의 기술적 극복 능력',
          "desc": '마크업의 자유도가 떨어지고 폐쇄된 환경에서도 웹 표준을 준수하고, 브라우저 호환성을 확보',
        },
        {
          "title": '기업의 거대한 정체성을 담은 확장성',
          "desc": '대규모 사이트에 최적화된 UI 가이드라인(Design System) 구축 및 공통 컴포넌트화.',
        },
        {
          "title": '고해상도 이미지와 데이터의 조화',
          "desc": '고해상도 비주얼 콘텐츠의 로딩 속도를 고려한 성능 최적화 및 복잡한 기술 사양 데이터의 가독성 확보.',
        },
      ],
    },
    {
      title: "INITION",
      href: "https://inition.kr/",
      description: "미적 감각을 코드로 완벽히 구현하는 능력",
      src: "/images/inition.svg",
      details: [
        {
          "title": '디자인 의도 완벽 재현',
          "desc": '디자이너의 의도를 픽셀 단위로 정확하게 구현하는 정밀한 코딩',
        },
        {
          "title": '마이크로 인터랙션과 애니메이션',
          "desc": '사용자의 경험을 풍성하게 만드는 감각적인 인터랙션 및 애니메이션 구현 CSS/JS만으로 생동감 부여',
        },
      ],
    },
    {
      title: "대한사회복지회",
      href: "https://kws.or.kr/",
      description: "'공공/복지' 성격이 강한 프로젝트 배려'와 '접근성'에 치중",
      src: "/images/kws.jpg",
      details: [
        {
          "title": '웹 접근성(Web Accessibility) 준수',
          "desc": '사회복지기관 사이트는 고령자, 장애인 등 다양한 사용자가 방문, 모든 사용자를 아우르는 웹 접근성 표준 준수 및 시맨틱 마크업',
        },
        {
          "title": '복잡한 기여 시스템(후원/결제)의 UI 안정성',
          "desc": '사용자 이탈을 방지하는 직관적인 폼 UI와 안정적인 프로세스 구현.',
        },
        {
          "title": '방대한 콘텐츠의 체계적 구조화',
          "desc": '방대한 양의 정보 전달을 위한 가독성 중심의 레이아웃 및 게시판 시스템 최적화',
        },
      ],
    },
    {
      title: "daycus",
      href: "http://www.daycus.com/",
      description: "정적인 웹페이지에 생동감과 리듬감을 부여",
      src: "/images/daycus.png",
      details: [
        {
          "title": '정교한 모션 구현',
          "desc": '단순한 클릭 위주의 UI를 넘어, 사용자의 액션에 반응하는 스크롤 트리거및 패럴랙스 효과를 구현',
        },
        {
          "title": '여백과 서체의 미학',
          "desc": '미니멀한 디자인일수록 도드라지는 타이포그래피의 세밀한 렌더링과 여백의 유연한 대응.',
        },
        {
          "title": '웹을 통한 브랜드 경험 전달',
          "desc": '단순 정보 전달이 아닌, 브랜드의 스토리가 웹상에서 매끄럽게 흘러가도록 페이지 전환',
        },
      ],
    },
  ]
}