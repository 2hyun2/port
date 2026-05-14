export const PORTFOLIO_DATA = {
    categories: [
        {
            id: 'hospital',
            title: 'API + AWS + FastAPI',
            description: '국가 공공데이터 API, AWS, RESTful API를 활용한 플랫폼 제작',
            projects: [
                {
                    title: "의료기관 통합 검색 및 제휴 관리 플랫폼",
                    summary: "공공데이터 API 기반 실시간 병원 검색 및 시설 운영자용 정보 관리 시스템 구축",
                    details: [
                        "AWS S3 및 커스텀 API 서버를 연동한 하이브리드 인프라 기반의 병원 정보 관리 시스템 설계",
                        "Thumbnail 및 다중 서브 이미지 업로드 프로세스 구현 및 미디어 자산 URL DB화 최적화",
                        "공공기관(심평원/공단) API 연동을 통해 전국 7만여 개 의료시설 데이터 실시간 파싱 및 동기화",
                        "Kakao/Naver Map API 기반 Geocoding 기술을 활용한 의료시설 위치 시각화 및 거리 계산 기능",
                        "Try-Catch-Finally 패턴 및 비동기 상태 제어를 통한 데이터 정제 성능 개선 및 사용자 피드백 최적화",
                    ]
                }
            ],
        },
        {
            id: "api",
            title: "API & System Design",
            description: "인하우스 프론트엔드 개발 및 시스템 설계 협업",
            projects: [
                {
                    title: "실시간 진료/영업 상태 판별 시스템",
                    summary: "복잡한 진료 시간 및 점심시간 데이터를 분석하여 실시간 운영 상태를 시각화하는 모듈 개발",
                    details: [
                        "Day-specific Key 매핑을 통해 요일별 상이한 진료/점심 시간을 실시간으로 연산하는 로직 설계",
                        "Date 객체와 연산 알고리즘을 활용해 '진료 중', '점심 시간', '진료 마감' 등 7가지 상태값을 Badge 형태로 시각화",
                        "유효하지 않은 데이터 입력 시 '개별 문의'로 예외 처리하는 안정적인 데이터 검증 로직 구현"
                    ]
                },
                {
                    title: "데이터 모듈화 및 비동기 서비스 레이어 설계",
                    summary: "전역 싱글톤 패턴을 활용한 API 통신 모듈 및 서비스 레이어 분리로 코드 유지보수성 향상",
                    details: [
                        "ApiManager: Singleton 패턴을 적용하여 전역 데이터 로드 및 중복 호출 방지를 위한 로컬 캐싱 시스템 구축",
                        "DetailService: 비동기 데이터 로드 대기열(waitForFunction) 처리를 통해 회원 상태와 연동된 동적 UI 렌더링 보장",
                        "Promise.all을 활용하여 좋아요(Wish), 공지사항, 이미지 등 독립적인 API 응답을 병렬로 처리하여 초기 로딩 속도 최적화"
                    ]
                },
                {
                    title: "카페24 front API 기반 4-Depth 카테고리 리뉴얼",
                    summary: "855개의 카테고리 하드코딩 => 실시간 동기화 GNB 시스템 구축",
                    details: [
                        "new Map() 자료구조를 이용한 데이터 탐색 성능 최적화",
                        "부모-자식 관계를 Map 데이터를 활용해 재귀형 Root 객체로 변환",
                        "createDocumentFragment를 활용한 렌더링 성능 최적화",
                        "e.target.closest() 를 이용한 이벤트 위임 및 메모리 누수 방지"
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

export const PORTFOLIO_DATA3 = {
    categories: [
        {
            id: 'badminton-frontend',
            title: 'Frontend: Real-time UI & State Architecture',
            description: 'Zustand와 React Query를 결합한 고도화된 상태 관리 및 실시간 UX 구현',
            projects: [
                {
                    title: "실시간 유저 상태 동기화 및 동적 매칭 인터페이스",
                    summary: "복잡한 비즈니스 로직을 프론트엔드 캐싱 전략으로 최적화하여 끊김 없는 사용자 경험 제공",
                    details: [
                        "Zustand와 persist 미들웨어를 활용하여 브라우저 환경에서도 끊김 없는 사용자 인증 세션 및 글로벌 상태 아키텍처 설계",
                        "React Query의 Query Invalidation 전략을 기반으로 서버 데이터(유저 명단, 경기 상태)의 실시간 정합성 보장 및 불필요한 리렌더링 최적화",
                        "useMemo와 커스텀 훅을 활용해 유저의 상태(경기/대기/휴식)와 매칭 선호도(남복/여복/혼복)를 실시간으로 연산 및 분류하는 복잡한 필터링 로직 구현",
                        "Socket.io를 통한 실시간 이벤트 수신 처리와 클라이언트 사이드 데이터 캐시 동기화 로직 구축"
                    ]
                }
            ],
        },
        {
            id: 'badminton-backend',
            title: 'Backend: Logic & System Engineering',
            description: 'Node.js 기반의 비즈니스 알고리즘 구현 및 시스템 안정성 확보',
            projects: [
                {
                    title: "Elo 레이팅 알고리즘 및 자동화된 세션 관리 시스템",
                    summary: "경기 결과 분석 알고리즘과 유저 이탈 방지 로직을 통한 데이터 무결성 서버 구축",
                    details: [
                        "Node.js 환경에서 경기 승패 데이터를 바탕으로 실력 점수를 산출하는 Elo Rating 알고리즘 엔진 자체 설계 및 구현",
                        "유저의 비정상적 종료(로그아웃, 브라우저 이탈) 시 진행 중인 경기를 즉시 처리하고 상태를 복구하는 'Auto-Exit' 트랜잭션 안전장치 개발",
                        "RESTful API 설계를 통한 확장성 있는 백엔드 구조 구축 및 중복 가입 방지, 권한 제어(Guard) 등 보안 로직 적용",
                        "실시간 소켓 통신을 통한 경기 생성 및 결과 전파 프로세스 최적화"
                    ]
                }
            ],
        },
        {
            id: 'badminton-database',
            title: 'Database & Data Integrity',
            description: 'MongoDB를 활용한 유연한 데이터 모델링 및 성능 최적화',
            projects: [
                {
                    title: "Mongoose 기반 스키마 설계 및 데이터 파이프라인 최적화",
                    summary: "비정형 데이터의 유연성을 활용하면서도 관계형 데이터의 정밀함을 유지하는 DB 아키텍처",
                    details: [
                        "Mongoose(ODM)를 활용하여 유저 정보, 경기 기록, 레이팅 히스토리 간의 참조 관계(DBRef) 정의 및 스키마 설계",
                        "레이팅 점수 업데이트와 경기 기록 저장을 원자적(Atomic)으로 처리하여 데이터 충돌 방지 및 일관성 유지",
                        "조회 빈도가 높은 필드에 대한 인덱싱 전략 수립을 통해 대규모 유저 명단 조회 및 랭킹 산출 쿼리 성능 개선",
                        "BSON 타입 데이터 처리 및 데이터 정합성 검증 로직을 통한 데이터베이스 레이어의 안전성 강화"
                    ]
                }
            ],
        }
    ]
};
