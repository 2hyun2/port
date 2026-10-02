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
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">서비스 흐름을 끝까지 살피는 개발자</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    웹을 만드는 일은 화면을 구현하는 데서 끝나지 않는다고 생각합니다. 사용자가 서비스를 이해하고 행동하는 순서, 운영자가 정보를 관리하는 과정, 예상하지 못한 상황에서 기능이 어떻게 동작할지까지 함께 살핍니다.
                                </p>
                                <p>
                                    HTML, CSS, JavaScript 기반의 웹 퍼블리싱에서 출발해 React로 웹앱을 만들고, 서비스에 필요한 데이터와 기능을 화면에 연결하는 일을 해왔습니다. 필요한 경우에는 API와 서버의 흐름까지 확인하며 문제를 해결합니다.
                                </p>
                            </div>
                        </div>

                        <div className="modal-chapter pb-4 mt-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">운영의 불편을 기능으로 바꾼 경험</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    의료용품 커머스에서는 많은 상품과 카테고리를 더 쉽게 탐색하도록 화면을 구성하고, 기획전·배송 안내·회원 흐름처럼 구매 과정에 필요한 기능을 꾸준히 다듬었습니다.
                                </p>
                                <p>
                                    재고를 빠르게 확인하기 어렵다는 운영팀의 문제를 해결하기 위해서는 ERP 재고와 자사몰 상품 정보를 한곳에서 조회하는 사내 대시보드를 만들었습니다. 현장에서 반복되는 일을 관찰하고, 실제로 쓰기 편한 기능으로 바꾸는 과정에서 개발의 가치를 배웠습니다.
                                </p>
                            </div>
                        </div>

                        <div className="modal-chapter pb-4 mt-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">일하는 방식</h5>
                            <div className="text-gray-600 leading-relaxed flex flex-col gap-3">
                                <p>
                                    기능을 만들기 전에는 사용자가 어디에서 멈추는지, 운영자가 어떤 정보를 반복해서 확인하는지부터 정리합니다. 핵심 흐름을 먼저 구현하고, 실제 사용 과정에서 확인한 문제를 다음 개선으로 연결합니다.
                                </p>
                                <p>
                                    새로운 기술과 AI 도구도 이 과정을 빠르게 만드는 데 활용합니다. 다만 결과를 그대로 적용하기보다 코드와 화면을 직접 검토하고, 서비스에 맞는지 확인한 뒤 반영합니다.
                                </p>
                                <p>
                                    앞으로도 사용자와 운영자 모두에게 이해하기 쉬운 웹서비스를 만드는 개발자로 성장하겠습니다.
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
