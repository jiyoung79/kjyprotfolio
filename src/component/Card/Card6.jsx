import React, { useEffect, useRef } from 'react';
import '../css/card.style.css';
import gitImage from '../../images/git.png';

export default function Card6() {
  const cardRef = useRef(null);

  useEffect(() => {
     const handleScroll = () => {
        const card = cardRef.current;
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight) {
           card.classList.add('card2-show');
        } else {
           card.classList.remove('card2-show');
        }
     };

     window.addEventListener('scroll', handleScroll);
     return () => {
        window.removeEventListener('scroll', handleScroll);
     };
  }, []);

  return (
     <div className='card2 hidden' ref={cardRef}>
        <div className='card_buttons'>
           <a
              href='https://github.com/jiyoung79/React_Weather_APP'
              target='_blank'
              rel='noopener noreferrer'
              className='git_link'>
              <img src={gitImage} alt='git' className='git_img' />
           </a>
           <a
              href='https://weatherpracticeapp.netlify.app/'
              className='card_button'
              target='_blank'
              rel='noopener noreferrer'>
              사이트 바로가기
           </a>
           <a
              href='https://www.notion.so/ReadMe-14a305c4377180d5b03ade9f05cb3265?pvs=4'
              className='card_button'
              target='_blank'
              rel='noopener noreferrer'>
              ReadMe
           </a>
        </div>
        <div className='stack'>
           <div className='stack_list'>HTML</div>
           <div className='stack_list'>CSS</div>
           <div className='stack_list'>React</div>
        </div>
        <div className='card_t'>
           <h3 className='card_title'>프로젝트명 :</h3>
           <h3 className='card_subtitle'>날씨 앱</h3>
        </div>
        <div className='card_contents'>
           <p>📌 섭씨, 화씨 등의 온도 변환 기능과 데이터 로딩 중 로딩 스피너를 추가해 사용자 경험을 개선</p>

           <p>
              📌 getCurrentLocation과 OpenWeatherMap API를 통해 사용자의 위치 기반 날씨와 선택된 도시의 날씨를
              조회하도록 구현
           </p>

           <div className='todo'>
              <p className='todo_title'>주요 업무 : </p>
              <p>리액트를 사용해 프론트엔드 개발 담당</p>
           </div>
        </div>
     </div>
  );
}
