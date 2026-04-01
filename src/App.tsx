import { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from './constants/data';

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
        <div className="intro-title">나는 로또 1등이여도 일이 재밌을거야</div>
        <div className="intro-content">
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
        </div>
      </section>


    </>
  );
};

export default App;