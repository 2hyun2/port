interface ModalProps {
        isOpen: boolean;
        onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
        if (!isOpen) return null;

        const handlePrint = () => {
                window.print();
        };

        return (
                <div className="modal popup print introduce">
                        <div className="modal-inner">
                                <div className="modal-header no-print">
                                        <div className="modal-header-btns">
                                                <button onClick={handlePrint} className="">
                                                        인쇄 / PDF 저장
                                                </button>
                                                <button onClick={onClose} className="">
                                                        닫기
                                                </button>
                                        </div>
                                </div>

                                <div className="modal-body print">
                                        <article className="modal-content">
                                                <div className="modal-chapter">
                                                        <h5>소개</h5>
                                                        <p>
                                                                <strong>성취감이 주는 도파민을 동력으로 삼는 3년 차 프론트엔드 개발자 이정현입니다.</strong> <br />
                                                                고등학교 졸업도 전에 8년 9개월간 쉼 없이 사회생활을 이어오며 제가 깨달은 것은, <br className="view-m" />
                                                                일이 삶에 주는 성취감에 대한 것입니다. 이 성취감은 개발자 업무를 시작하면서 더욱 심화되었으며,  <br className="view-m" />
                                                                복잡한 로직을 설계하고, 구현하고,  반응이 오고, 과정 자체를 즐깁니다. <br />
                                                                8년이라는 성실함이라는 기본기 위에, 3년간의 압축적인 기술적 성취를 더해 <br className="view-m" />
                                                                팀의 든든한 해결사가 되고자 합니다.
                                                        </p>
                                                </div>
                                                <div className="modal-chapter">
                                                        <h5>문제 해결 경험</h5>
                                                        <p>
                                                                <strong>플랫폼의 한계를 기술로 돌파하다</strong> <br />
                                                                임대형 솔루션(Cafe24)의 구조적 한계로 인해 이루고자 하는 프로젝트를 원활히 진행하기 힘들다 느꼈을때, <br className="view-m" />
                                                                기존 솔루션을 별도로 AWS 개설 및 연동을 하고자 하는 열망을 느꼈습니다. <br />
                                                                사내에 기획 부서라는게 존재하지 않아, 기획, 디자인, 프론트, 백엔드 모든걸 
                                                                 2명이서 해야한다고 생각 했을 땐 무모하다 생각도 들었지만,
                                                                고도화를 위해서는 필요한 기술이라 생각해 하나씩 설계하며 많은 것을 배웠습니다. <br />
                                                                모든 부서의 소중함을 느끼며, 고충을 이해하고, 새로운 지식을 습득하며 성장하는 나를 보다보니, 이러한 과정을 거쳐 현재의 고도화된 시스템을 완성했습니다.
                                                        </p>
                                                </div>
                                                <div className="modal-chapter">
                                                        <h5>직무 성취 경험</h5>
                                                        <p>
                                                                <strong>비즈니스의 가려운 곳을 긁어주는 개발</strong> <br />
                                                                다중 쇼핑몰 운영 특징상 실시간 재고를 반영하고 <br className="view-m" /> 수량에 따라 상품 상태를 변화 시키는건 큰 리스크를 유발합니다. <br />
                                                                해서 보통 재고를 무한으로 해놓고 재고 조회에 따른 유동적인 흐름을 유지하는데 도/소매 의료기기 유통업 상 1,000여 개의
                                                                메인 제품 코드와 파생 옵션들을 보유중이며, 기존 ecount 서비스는 조회가 까다롭고 불편하다는 의견이 있었습니다. <br />
                                                                해서 혼자 모든 과정을 설계하여 사내 IP 망 + 특정 계정 + 실시간 검색 기능을 넣은 <br className="view-m" />
                                                                 node 기반 서버 API를 제작하게 되었습니다. <br />
                                                                재고 조회를 실시간으로 파악해야하는 MD, CS 영역에서의 호응이 좋았으며, <br className="view-m" />
                                                                 이제는 없으면 불편함을 느끼는 서비스에 이르었습니다. <br />
                                                                같이 일하는 동료의 업무 효율성을 개선하여 매출에도 긍정적인 영향을 주었습니다.
                                                        </p>
                                                </div>
                                                <div className="modal-chapter">
                                                        <h5>가치관 및 신조</h5>
                                                        <p>
                                                                <strong>사용자를 위한, 나를 위한 질문을 멈추지 않습니다.</strong> <br />
                                                                기획안이 모호하거나 기술적 제약이 생겼을 때, 저는 "왜?"라는 질문에서 답을 찾습니다. <br className="view-m" />
                                                                단순히 코드를 짜는 것에 그치지 않고, 이 기능이 사용자에게 어떤 가치를 주는지, <br className="view-m" />
                                                                운영 효율을 얼마나 높이는지 끊임없이 질문하며 최적의 결과물을 도출하려 노력합니다. <br />
                                                                모르는 것을 인정하고 질문하는 용기, 그리고 그 답을 내 것으로 만드는 집요함이 저를 성장시키는 가장 큰 원동력입니다.
                                                        </p>
                                                </div>

                                                <div className="modal-chapter">
                                                        <h5>성격의 장단점</h5>
                                                        <p>
                                                                <strong>필요한 것이라면, 두려워하지 말라</strong> <br />
                                                                저의 장점은 새로운 기술이나 막막한 과제 앞에서도 주저하지 않는 '실행력'입니다. <br className="view-m" />
                                                                AWS 연동이나 Node 기반 API 서버 제작처럼 처음 접하는 분야라도 프로젝트에 꼭 필요하다면 <br className="view-m" />
                                                                밤을 새워서라도 원리를 파악하고 구현해냅니다. 8년 9개월간 증명된 '성실함'이 그 바탕입니다. <br />
                                                                다만, 로직의 효율성에 집착하다 보니 초반 설계 단계에서 고민이 길어질 때가 있습니다. <br className="view-m" />
                                                                이를 보완하기 위해 '점진적 개선' 방식을 지향하며, 우선순위에 맞춰 핵심 기능을 먼저 구현한 뒤 고도화하는 방식으로 속도와 퀄리티의 균형을 맞추고 있습니다.
                                                        </p>
                                                </div>
                                        </article>
                                </div>
                        </div>
                </div>
        );
}

export default Modal;