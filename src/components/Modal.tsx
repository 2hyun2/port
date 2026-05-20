interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="modal popup print fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-[2px]">
            <div className="modal-inner relative w-[calc(100%-1rem)] flex flex-col  max-w-screen-sm max-h-full min-h-screen bg-white border border-[var(--stroke4)] rounded-2xl shadow-2xl overflow-hidden">
                <div className="modal-header no-print text-right bg-white border-b border-[var(--stroke4)] p-4">
                    <div className="modal-header-btns flex gap-2 justify-between">
                        <div className="modal-title flex items-center gap-2">
                            <h3 className="text-lg font-bold text-gray-900">Tech Essay : 이정현</h3>
                        </div>

                        <div className="modal-header-btns flex gap-2 justify-end">
                            <button onClick={onClose}
                                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md"
                            >
                                닫기
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="modal-body print flex-1 bg-white p-4 overflow-y-auto [scrollbar-width:thin]">
                    <article className="modal-content flex flex-col space-y-8 divide-y divide-[var(--stroke4)]">
                        <div className="modal-chapter pb-4 mt-4 first:mt-0">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">사용자 경험(UX)과 데이터의 연결점, 프론트엔드</h5>
                            {/* <p> 태그들을 flex-col과 gap으로 묶어 문단 사이 여백을 줍니다 */}
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    <strong>"코드의 끝에는 항상 사용자가 있다"</strong>는 생각으로 개발에 임합니다.
                                </p>
                                <p>
                                    단순히 화면을 그려내는 것을 넘어, 백엔드 API와의 효율적인 데이터 통신과 렌더링 최적화를 통해 쾌적한 웹 환경을 제공하는 데 집중합니다.
                                </p>
                                <p>
                                    알 수 없는 오류와 마주하더라도 회피하지 않고, 공식 문서와 디버깅 툴을 집요하게 파고들어 원인을 분석하고 해결책을 내 것으로 만드는 과정 자체를 즐깁니다. 이러한 끈기와 문제 해결 능력이 저를 끊임없이 성장시키는 가장 큰 무기입니다.
                                </p>
                            </div>
                        </div>

                        <div className="modal-chapter pb-4 mt-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">문제 해결 경험</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    <strong>플랫폼의 한계를 기술로 돌파하다</strong>
                                </p>
                                <p>
                                    임대형 솔루션(Cafe24)의 구조적 한계로 인해 서비스 고도화에 제약을 느꼈을 때, 기존 솔루션에 머물지 않고 별도로 AWS 환경을 구축하고 연동하고자 하는 열망을 가졌습니다.
                                </p>
                                <p>
                                    사내에 기획 부서가 부재하여 기획, 디자인, 프론트엔드, 백엔드 모든 과정을 2명이서 감당해야 했을 땐 무모하다는 생각도 들었지만, 고도화를 위해서는 반드시 필요한 기술이라 판단하여 하나씩 설계하며 돌파했습니다.
                                </p>
                                <p>
                                    모든 부서의 소중함을 느끼며 고충을 이해하고, 새로운 지식을 습득하며 성장하는 제 자신을 발견했습니다. 이러한 치열한 과정을 거쳐 현재의 고도화된 시스템을 완성해 냈습니다.
                                </p>
                            </div>
                        </div>

                        <div className="modal-chapter pb-4 mt-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">직무 성취 경험</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    <strong>비즈니스의 가려운 곳을 긁어주는 개발</strong>
                                </p>
                                <p>
                                    다중 쇼핑몰 운영 특성상 실시간 재고를 반영하고 수량에 따라 상품 상태를 변화시키는 것은 큰 리스크를 유발합니다. 따라서 보통 재고를 무한으로 설정하여 유동적인 흐름을 유지하지만, 도/소매 의료기기 유통업 특성상 1,000여 개의 메인 제품 코드와 파생 옵션들을 보유하고 있어 기존 ERP(ecount) 서비스만으로는 재고 조회가 까다롭고 불편하다는 실무진의 의견이 있었습니다.
                                </p>
                                <p>
                                    이를 해결하기 위해 사내 IP 망, 특정 계정 권한, 실시간 검색 기능을 통합한 Node.js 기반 서버 API를 직접 설계하고 제작하게 되었습니다.
                                </p>
                                <p>
                                    결과적으로 재고를 실시간으로 파악해야 하는 MD, CS 부서에서 폭발적인 호응을 얻었으며, 이제는 사내에서 '없으면 불편함을 느끼는' 필수 서비스로 자리 잡았습니다. 동료들의 업무 효율성을 크게 개선하여 궁극적으로 매출에도 긍정적인 영향을 미친 뜻깊은 경험입니다.
                                </p>
                            </div>
                        </div>

                        <div className="modal-chapter pb-4 mt-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">가치관 및 신조</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    <strong>사용자를 위한, 나를 위한 질문을 멈추지 않습니다.</strong>
                                </p>
                                <p>
                                    기획안이 모호하거나 기술적 제약이 생겼을 때, 저는 "왜?"라는 질문에서 답을 찾습니다. 단순히 코드를 짜는 것에 그치지 않고, 이 기능이 사용자에게 어떤 가치를 주는지, 운영 효율을 얼마나 높이는지 끊임없이 질문하며 최적의 결과물을 도출하려 노력합니다.
                                </p>
                                <p>
                                    모르는 것을 인정하고 질문하는 용기, 그리고 그 답을 내 것으로 만드는 집요함이 저를 성장시키는 가장 큰 원동력입니다.
                                </p>
                            </div>
                        </div>

                        <div className="modal-chapter pb-4 mt-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">경계를 두지 않는 기술 스택과 점진적 고도화</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    <strong>"프로젝트에 필요하다면, 영역을 가리지 않고 학습하고 적용합니다."</strong>
                                </p>
                                <p>
                                    프론트엔드 영역에 머물지 않고, 필요시 Node.js 기반의 RESTful API 서버를 직접 구축하거나 AWS 인프라(S3 등)를 연동하는 등 전체 시스템의 아키텍처를 이해하며 개발합니다. 데이터베이스(MongoDB, MySQL)의 흐름을 알기 때문에 프론트엔드 단에서 상태 관리와 비동기 처리를 훨씬 더 견고하게 설계할 수 있습니다.
                                </p>
                                <p>
                                    과거에는 로직의 완벽함과 효율성에 집착하여 초기 설계에 과도한 시간을 쏟는 경향이 있었습니다. 현재는 이를 개선하기 위해 <strong>'점진적 개선'</strong> 방식을 원칙으로 삼고 있습니다. 핵심 기능(MVP)을 우선적으로 구현하여 서비스의 뼈대를 갖춘 뒤, 지속적인 리팩토링을 통해 성능과 코드의 품질을 끌어올리는 방식으로 속도와 퀄리티의 균형을 맞추고 있습니다.
                                </p>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    );
}

export default Modal;