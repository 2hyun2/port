// import { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, PORTFOLIO_DATA2 } from './constants/data';

const App = () => {

  const sections = [
    { id: 'intro', label: 'Intro' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="">
        <ul className="">
          {sections.map((item) => (
            <li>
              <a key={item.id} href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="intro">
        <h2 className="section-title">나는 로또 1등이여도 일이 재밌을거야</h2>
        <article className="intro-content non-padding">
          <div className="intro-user">
            <div className="thumbnail"><img src="" alt="" /></div>
            <div className="desc">
              <h4 className="name">이정현</h4>
              <p className="job">프론트엔드 개발자</p>
              <ul className='contact'>
                <li>
                  <a href="tel:010-2375-0449">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>+82 10-2375-0449</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:eventietter@naver.com">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>eventietter@naver.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="intro-introduce">
            <ul>
              <li>
                <h5>생년월일</h5>
                <p>1997.02.08</p>
              </li>
              <li>
                <h5>거주지</h5>
                <p>서울시 관악구 중앙동</p>
              </li>
              <li>
                <h5>취미</h5>
                <p>배드민턴, 유튜브, 게임</p>
              </li>
              <li>
                <h5>학력</h5>
                <p>서울공업고등학교 졸업 <br />시스템 자동화과</p>
              </li>
              <li>
                <h5>병역</h5>
                <p>군필 (2016. 02 ~ 2018. 12)</p>
              </li>
              <li>
                <h5>사회 경험</h5>
                <p>8년 9개월 (2026.04.01 기준)</p>
              </li>
              <li className="mind">사용자를 위한, 나를 위한, 질문을 계속 하며 소통을 즐겨하며 해결합니다.</li>
            </ul>
          </div>
        </article>
      </section>

      <section id="work">
        <h2 className="section-title">개발 경력 (만 3년, 2026.04.01 기준)</h2>
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
            <p className="desc">ASP, PHP를 기반으로 작업하는 웹에이전시</p>
          </div>
          <ul className="past-project">
          {
            PORTFOLIO_DATA2.publishing.map((item, index) => (
              <li key={index}>
                <div className="thumbnail">
                  <a href={item.href}><img src={item.src} alt={item.title} /></a>
                </div>
                <ul className="past-project-details">
                  {item.details.map((detail, pIndex) => (
                    <li key={pIndex}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))
          }
          </ul>
        </article>
      </section>

    </>
  );
};

export default App;