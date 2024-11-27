import React, { useEffect, useRef } from 'react';
import '../css/card.style.css';
import gitImage from '../../images/git.png';

export default function Card3() {
   const cardRef = useRef(null);

   useEffect(() => {
      const handleScroll = () => {
         const card = cardRef.current;
         const cardTop = card.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;

         if (cardTop < windowHeight) {
            card.classList.add('show');
         } else {
            card.classList.remove('show');
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   return (
      <div className='card hidden' ref={cardRef}>
         <div className='card_buttons'>
            <a
               href='https://github.com/jiyoung79/Netflix_clonecoding'
               target='_blank'
               rel='noopener noreferrer'
               className='git_link'>
               <img src={gitImage} alt='git' className='git_img' />
            </a>
            <a
               href='https://kjynetcloneflix.netlify.app/'
               className='card_button'
               target='_blank'
               rel='noopener noreferrer'>
               사이트 바로가기
            </a>
            <a
               href='https://www.notion.so/Netflix-ReadMe-14a305c4377180b98ec0c898d2cff5a4?pvs=4'
               className='card_button'
               target='_blank'
               rel='noopener noreferrer'>
               ReadMe
            </a>
         </div>
         <div className='stack'>
            <div className='stack_list'>HTML</div>
            <div className='stack_list'>CSS</div>
            <div className='stack_list'>JavaScript</div>
            <div className='stack_list'>React</div>
            <div className='stack_list'>Redux</div>
            <div className='stack_list'>React Router Dom</div>
            <div className='stack_list'>React Hook</div>
            <div className='stack_list'>React Query</div>
         </div>
         <div className='card_t'>
            <h3 className='card_title'>프로젝트명 :</h3>
            <h3 className='card_subtitle'>Netflix 클론코딩</h3>
         </div>
         <div className='card_contents'>
            <p>📌 기존 넷플릭스 영문 사이트를 클론코딩</p>
            <p className='sub'>(hook을 이용하여 코드의 재사용, 컴포넌트를 비즈니스 로직과 UI를 분류(코드의 세분화))</p>
            <p className='sub'>
               (state를 사용하여 동적인 데이터를 관리하고, 그 데이터를 기반으로 한 UI의 자동적인 업데이트를 쉽게 처리)
            </p>
            <p>📌 키워드로 영화를 검색할 수 있다.</p>
            <p>📌 TMDB를 이용하여 인기영화, 개봉할 영화 API 호출</p>

            <div className='todo'>
               <p className='todo_title'>담당 역할 :</p>
               <p>리덕스, 리액트, 리액트쿼리, 리액트 라우터 돔, 리액트 훅을 사용한 클론코딩</p>
            </div>
         </div>
      </div>
   );
}
