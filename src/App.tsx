import { useState } from 'react';
import {
    SiNaver, SiHtml5, SiCss, SiJavascript,
    SiReact, SiNodedotjs,
    SiGit, SiGithub, SiFirebase,
    SiMongodb, SiMysql, SiPhp, SiDotnet
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi2';

import { PORTFOLIO_DATA, PORTFOLIO_DATA2, PORTFOLIO_DATA3 } from './constants/data';
import Modal from './components/Modal';
import UserImage from '../src/assets/user.jpg'

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ProfilePicOpen, setProfilePicOpen] = useState(false);
    return (
        <>

            {
                ProfilePicOpen ?
                    (
                        <div className="modal no-print pic" onClick={() => setProfilePicOpen(false)}>
                            <img src={UserImage} className='rounded-xl shadow-xl' alt="" />
                        </div>
                    ) : null
            }

            <section id="intro">
                <h2 className="text-lg text-slate-900 font-bold text-center bg-slate-50 rounded-lg shadow p-1 mb-4">
                    나는 로또 1등이여도 일이 재밌을거야
                </h2>

                <article className="intro-content border-1 border-gray-100 border rounded-xl shadow p-2 overflow-hidden">
                    <div className="intro-user flex items-center gap-4 bg-gray-100 border border-gray-200 rounded-xl shadow p-2 mb-4">
                        <div className="thumbnail relative w-[7rem] aspect-square rounded-full overflow-hidden cursor-pointer transition-all ease-300" onClick={() => setProfilePicOpen(true)}>
                            <img src={UserImage} alt="프로필 사진" />
                        </div>
                        <div className="desc">
                            <h4 className="text-2xl font-semibold">이정현 <span className="text-base">2Hyun2</span></h4>
                            <p className="text-lg font-medium text-gray-500">Frontend Developer</p>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a className='flex items-center gap-2 text-sm' href="tel:010-2375-0449">
                                        <HiPhone className="w-[0.75rem] h-[0.75rem] text-green-600" />
                                        <span>010-2375-0449</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-center gap-2 text-sm' href="mailto:eventietter@naver.com">
                                        <SiNaver className="w-[0.75rem] h-[0.75rem] text-[#03C75A]" />
                                        <span>eventietter@naver.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-center gap-2 text-sm' href="https://github.com/2hyun2" target='_blank' rel="noreferrer">
                                        <SiGithub className="w-[0.75rem] h-[0.75rem] text-gray-900" />
                                        <span>https://github.com/2hyun2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="intro-introduce">
                        <ul className='grid grid-cols-2 gap-1 pt-2 pb-0 px-2'>
                            <li className='text-sm text-gray-600 '>
                                <h5 className='text-gray-400 font-semibold mb-0.5'>생년월일</h5>
                                <p className='text-gray-900 '>1997.02.08</p>
                            </li>
                            <li className='text-sm text-gray-600 '>
                                <h5 className='text-gray-400 font-semibold mb-0.5'>거주지</h5>
                                <p className='text-gray-900 '>서울시 관악구 2호선 라인</p>
                            </li>
                            <li className='text-sm text-gray-600 '>
                                <h5 className='text-gray-400 font-semibold mb-0.5'>취미</h5>
                                <p className='text-gray-900 '>배드민턴, 유튜브, 테트리스</p>
                            </li>
                            <li className='text-sm text-gray-600 '>
                                <h5 className='text-gray-400 font-semibold mb-0.5'>학력</h5>
                                <p className='text-gray-900 '>서울공업고등학교 졸업 <br />시스템 자동화과</p>
                            </li>
                            <li className='text-sm text-gray-600 '>
                                <h5 className='text-gray-400 font-semibold mb-0.5'>병역</h5>
                                <p className='text-gray-900 '>군필 (2016. 02 ~ 2018. 12)</p>
                            </li>
                            <li className='text-sm text-gray-600'>
                                <h5 className='text-gray-400 font-semibold '>총 사회 경험 (9년 1개월)</h5>
                                <p className='text-gray-500'><span className="font-medium">비개발 직무:</span> 6년</p>
                                <p className='text-gray-900'><span className="text-blue-600 font-bold">개발 경력:</span><span className="font-bold"> 4년차</span></p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>

            <section id="skills" className="mb-8">
                <h2 className="text-lg text-slate-900 font-bold text-center bg-slate-50 rounded-lg shadow p-1 mb-4">Tech Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="border border-gray-200 rounded-xl shadow-sm p-4 bg-white">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Primary Skills</h4>
                        <ul className="flex flex-col gap-4">
                            <li className='text-sm'>
                                <h5 className='text-gray-600 font-semibold mb-1'>Languages</h5>
                                <p className='flex items-center gap-2'>
                                    <SiHtml5 className='w-6 h-6 text-[#E34F26]' title="HTML5" />
                                    <SiCss className='w-6 h-6 text-[#1572B6]' title="CSS3" />
                                    <SiJavascript className='w-6 h-6 text-[#F7DF1E]' title="JavaScript" />
                                </p>
                            </li>
                            <li className='text-sm'>
                                <h5 className='text-gray-600 font-semibold mb-1'>Frameworks & Runtime</h5>
                                <p className="flex items-center gap-2">
                                    <SiReact className='w-6 h-6 text-[#61DAFB]' title="React" />
                                    <SiNodedotjs className='w-6 h-6 text-[#339933]' title="Node.js" />
                                </p>
                            </li>
                            <li className='text-sm'>
                                <h5 className='text-gray-600 font-semibold mb-1'>Tools & IDEs</h5>
                                <p className="flex items-center gap-2">
                                    <VscVscode className="w-6 h-6 text-[#007ACC]" title="VS Code" />
                                    <SiGit className="w-6 h-6 text-[#F05032]" title="Git" />
                                    <SiGithub className="w-6 h-6 text-[#181717]" title="GitHub" />
                                </p>
                            </li>
                        </ul>
                    </article>

                    {/* 경험해본 스택 카드 */}
                    <article className="border border-gray-200 rounded-xl shadow-sm p-4 bg-white">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Familiar With</h4>
                        <ul className="flex flex-col gap-4">
                            <li className='text-sm'>
                                <h5 className='text-gray-600 font-semibold mb-1'>Backend & Databases</h5>
                                <p className="flex items-center gap-2 flex-wrap">
                                    <SiPhp className="w-6 h-6 text-[#777BB4]" title="PHP" />
                                    <SiDotnet className="w-6 h-6 text-[#512BD4]" title="ASP.NET" />
                                    <SiMysql className="w-6 h-6 text-[#4479A1]" title="MySQL" />
                                    <SiMongodb className="w-6 h-6 text-[#47A248]" title="MongoDB" />
                                    <SiFirebase className="w-6 h-6 text-[#FFCA28]" title="Firebase" />
                                </p>
                            </li>
                            <li className='text-sm'>
                                <h5 className='text-gray-600 font-semibold mb-1'>Cloud Services</h5>
                                <p className="flex items-center gap-2">
                                    <FaAws className="w-6 h-6 text-[#232F3E]" title="AWS" />
                                </p>
                            </li>
                        </ul>
                    </article>

                </div>
            </section>

            <section id="work">
                <h2 className="text-lg text-slate-900 font-bold text-center bg-slate-50 rounded-lg shadow p-1 mb-4">Work Experience & Projects</h2>
                <article className='now'>
                    <div className="company">
                        <a href='https://medistorage.kr/' target='blank' className='title'>㈜비즈앤씨</a>
                        <p className="date">2025.09.15 ~ 현재</p>
                        <p className="desc">의료용품을 전문으로 유통하는 유통 플랫폼 기업</p>
                    </div>
                    {PORTFOLIO_DATA.categories.map((category, index) => (
                        <details open key={index}>
                            <summary>
                                <h3 className="details-title">{category.title}</h3>
                                <h4 className="details-sub-title">{category.description}</h4>
                            </summary>

                            {category.projects.map((obj, pIndex) => ( // 상위 index와 겹치지 않게 pIndex로 명명 권장
                                <details className='details-obj' key={pIndex}>
                                    <summary>
                                        <h4 className="obj-title">{obj.title}</h4>
                                        <h5 className="obj-sub-title">{obj.summary}</h5>
                                    </summary>
                                    <ul className='details-desc'>
                                        {obj.details.map((desc, dIndex) => (
                                            <li key={dIndex}>{desc}</li>
                                        ))}
                                    </ul>
                                </details>
                            ))}
                        </details>
                    ))}
                </article>
                <article className='past'>
                    <div className="company">
                        <a href='https://www.prix.co.kr/' target='blank' className='title'>㈜웹컴퍼니</a>
                        <p className="date">2022. 07 ~ 2024. 11</p>
                        <p className="desc">웹에이전시</p>
                    </div>
                    <details open>
                        <summary>
                            <h3 className="details-title">Frontend & Publishing</h3>
                            <h4 className="details-sub-title">재직 당시 수행한 50여 개 이상의 프로젝트 중 주요 구축 사례입니다.</h4>
                        </summary>
                        {
                            PORTFOLIO_DATA2.publishing.map((obj, index) => (
                                <details className='details-obj' key={index}>
                                    <summary>
                                        <div className="flex gap-4 items-center">
                                            <div className="">
                                                <h4 className="obj-title">{obj.title}</h4>
                                                <h5 className="obj-sub-title">{obj.description}</h5>
                                            </div>
                                            <a className='obj-href' href={obj.href} target='blank'>바로가기</a>
                                        </div>
                                    </summary>
                                    <ul className='details-desc'>
                                        {obj.details.map((desc, dIndex) => (
                                            <li key={dIndex}>
                                                <p className='details-desc-title'>{desc.title}</p>
                                                <span className='details-desc-sub'>{desc.desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ))
                        }
                    </details>
                </article>
                <article className="side">
                    <div className="company">
                        <a href='https://www.prix.co.kr/' target='blank' className='title'>사이드 프로젝트</a>
                        <p className="date">Apr 20, 2026 ~ Present</p>
                        <p className="desc">배드민턴 동호회 웹앱</p>
                    </div>
                    <details open>
                        <summary>
                            <h3 className="details-title">배드민턴 동호회를 다니며 생각한 것들을 제작중입니다.</h3>
                            <h4 className="details-sub-title">Full stack</h4>
                        </summary>
                        {PORTFOLIO_DATA3.categories.map((category, index) => (
                            <details open key={index}>
                                <summary>
                                    <h3 className="details-title">{category.title}</h3>
                                    <h4 className="details-sub-title">{category.description}</h4>
                                </summary>

                                {category.projects.map((obj, pIndex) => ( // 상위 index와 겹치지 않게 pIndex로 명명 권장
                                    <details className='details-obj' key={pIndex}>
                                        <summary>
                                            <h4 className="obj-title">{obj.title}</h4>
                                            <h5 className="obj-sub-title">{obj.summary}</h5>
                                        </summary>
                                        <ul className='details-desc'>
                                            {obj.details.map((desc, dIndex) => (
                                                <li key={dIndex}>{desc}</li>
                                            ))}
                                        </ul>
                                    </details>
                                ))}
                            </details>
                        ))}
                    </details>
                </article>
            </section>

            <section id="resume">
                <h3 className="text-lg text-slate-900 font-bold text-center bg-slate-50 rounded-lg shadow p-1 mb-4">Introduce</h3>

                <article className="cta-paper no-padding">
                    <button onClick={() => setIsModalOpen(true)} className="w-full flex items-center gap-4 padding-2 shadow-inner group">
                        <div className="flex-none text-2xl group-hover:rotate-[-45deg] transition-transform">📄</div>
                        <div className="text-left flex-auto">
                            <strong className="block text-lg text-point-color">Tech Essay : 경계를 두지 않는 문제 해결</strong>
                            <span className="text-sm text-sub">9년의 책임감과 4년차 프론트엔드 개발자의 치열한 고민을 담았습니다.</span>
                        </div>
                    </button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                </article>


            </section>
        </>
    );
};

export default App;