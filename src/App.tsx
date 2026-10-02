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

            <section id="intro" aria-labelledby="intro-title">
                <article className="intro-content relative isolate overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 px-5 py-6 text-white shadow-xl sm:px-8 sm:py-8">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-1/3 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

                    <div className="relative flex items-start justify-between gap-5">
                        <div className="min-w-0">
                            <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-blue-200">
                                FRONTEND DEVELOPER · 4TH YEAR
                            </p>
                            <h1 id="intro-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                이정현 <span className="ml-1 text-base font-medium text-slate-400 sm:text-lg">2Hyun2</span>
                            </h1>
                            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
                                웹 퍼블리싱부터 프론트엔드 기능 개발까지,<br className="hidden sm:block" />
                                서비스에 필요한 영역을 폭넓게 경험해 왔습니다.
                            </p>
                        </div>
                        <button
                            type="button"
                            aria-label="프로필 사진 크게 보기"
                            className="thumbnail relative w-20 shrink-0 overflow-hidden rounded-full shadow-xl transition-transform hover:scale-105 sm:w-28"
                            onClick={() => setProfilePicOpen(true)}
                        >
                            <img src={UserImage} alt="이정현 프로필 사진" className="aspect-square h-full w-full object-cover" />
                        </button>
                    </div>

                    <div className="relative mt-7 grid gap-2 border-t border-white/10 pt-4 text-sm sm:grid-cols-3">
                        <a className="group rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-colors hover:border-blue-300/50 hover:bg-white/10" href="tel:010-2375-0449">
                            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-blue-200"><HiPhone className="h-3.5 w-3.5" /> PHONE</span>
                            <span className="mt-1 block font-medium text-white">010-2375-0449</span>
                        </a>
                        <a className="group min-w-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-colors hover:border-blue-300/50 hover:bg-white/10" href="mailto:eventietter@naver.com">
                            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-blue-200"><SiNaver className="h-3.5 w-3.5 text-[#03C75A]" /> EMAIL</span>
                            <span className="mt-1 block truncate font-medium text-white">eventietter@naver.com</span>
                        </a>
                        <a className="group rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-colors hover:border-blue-300/50 hover:bg-white/10" href="https://github.com/2hyun2" target="_blank" rel="noreferrer">
                            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-blue-200"><SiGithub className="h-3.5 w-3.5" /> GITHUB</span>
                            <span className="mt-1 block font-medium text-white">github.com/2hyun2</span>
                        </a>
                    </div>
                </article>
            </section>

            <section id="skills" className="mb-8">
                <h2 className="text-lg text-slate-900 font-bold text-center bg-slate-50 rounded-lg shadow p-1 mb-4">Tech Stack</h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <article className="border border-gray-200 rounded-xl shadow-sm p-4 bg-white">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Core Skills</h4>
                        <ul className="flex flex-col gap-4">
                            <li className='text-sm'>
                                <h5 className='text-gray-600 font-semibold mb-1'>Frontend</h5>
                                <p className='flex items-center gap-2'>
                                    <SiHtml5 className='w-6 h-6 text-[#E34F26]' title="HTML5" />
                                    <SiCss className='w-6 h-6 text-[#1572B6]' title="CSS3" />
                                    <SiJavascript className='w-6 h-6 text-[#F7DF1E]' title="JavaScript" />
                                    <SiReact className='w-6 h-6 text-[#61DAFB]' title="React" />
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
                                <h5 className='text-gray-600 font-semibold mb-1'>Server & Cloud</h5>
                                <p className="flex items-center gap-2">
                                    <SiNodedotjs className='w-6 h-6 text-[#339933]' title="Node.js" />
                                    <FaAws className="w-6 h-6 text-[#232F3E]" title="AWS" />
                                </p>
                            </li>
                        </ul>
                    </article>

                    <article className="border border-blue-100 rounded-xl shadow-sm p-4 bg-blue-50/40 md:col-span-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-blue-100 pb-2">
                            <h4 className="text-lg font-bold text-gray-800">AI-Assisted Development</h4>
                            <span className="text-xs font-medium text-blue-700">AI Coding Workflow</span>
                        </div>
                        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                            <li>
                                <h5 className="text-sm font-semibold text-slate-800">Planning & Prototyping</h5>
                                <p className="mt-1 text-sm leading-5 text-slate-600">요구사항을 기능 단위로 정리하고 화면과 컴포넌트 초안을 빠르게 구체화합니다.</p>
                            </li>
                            <li>
                                <h5 className="text-sm font-semibold text-slate-800">Debugging & Refactoring</h5>
                                <p className="mt-1 text-sm leading-5 text-slate-600">오류 원인을 함께 분석하고 리팩터링 후보를 검토해 코드 개선에 활용합니다.</p>
                            </li>
                            <li>
                                <h5 className="text-sm font-semibold text-slate-800">Review & Verification</h5>
                                <p className="mt-1 text-sm leading-5 text-slate-600">AI 결과를 그대로 적용하지 않고 브라우저 테스트와 직접 수정으로 품질을 확인합니다.</p>
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
                        <p className="date">2025.09.15 ~ 2026.07.24</p>
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
                                        {obj.technologies && (
                                            <li className="details-stack">
                                                <span>사용 기술</span>
                                                <p>{obj.technologies.join(' · ')}</p>
                                            </li>
                                        )}
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
                            <h3 className="details-title">웹사이트 구축 및 퍼블리싱</h3>
                            <h4 className="details-sub-title">다양한 기업·기관 웹사이트 구축에 참여</h4>
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
                        <span className='title'>사이드 프로젝트</span>
                        <p className="date">2026.04 ~ 진행 중</p>
                        <p className="desc">동호회 운영 · 생활 기록 웹앱</p>
                    </div>
                    <details open>
                        <summary>
                            <h3 className="details-title">개인 프로젝트</h3>
                            <h4 className="details-sub-title">사용자 흐름과 데이터 구조를 직접 설계하며 만드는 웹앱</h4>
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
                                            {obj.technologies && (
                                                <li className="details-stack">
                                                    <span>사용 기술</span>
                                                    <p>{obj.technologies.join(' · ')}</p>
                                                </li>
                                            )}
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
                            <strong className="block text-lg text-point-color">Tech Essay : 이정현</strong>
                            <span className="text-sm text-sub">서비스 흐름과 운영의 불편을 함께 살피는 개발자 이야기입니다.</span>
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
