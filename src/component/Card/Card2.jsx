import React, { useEffect, useRef } from 'react';
import '../css/card.style.css';
import gitImage from '../../images/git.png';

export default function Card2() {
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
               href='https://github.com/zizi-Collab/Cwar_site'
               target='_blank'
               rel='noopener noreferrer'
               className='git_link'>
               <img src={gitImage} alt='git' className='git_img' />
            </a>
            <a
               href='https://zizi-collab.github.io/Cwar_site/'
               className='card_button'
               target='_blank'
               rel='noopener noreferrer'>
               사이트 바로가기
            </a>
            <a
               href='https://www.notion.so/Cwar-ReadMe-14a305c437718088887fe0c62c448a06?pvs=4'
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
            <div className='stack_list'>PHP</div>
         </div>
         <div className='card_t'>
            <h3 className='card_title'>프로젝트명 :</h3>
            <h3 className='card_subtitle'>Cwar (진행중)</h3>
         </div>
         <div className='card_contents'>
            <p>📌 국내 힙합 아티스트의 활동과 음악을 소개하는 웹페이지</p>
            <p>📌 HTML, CSS, JavaScript를 사용하여 정적 페이지를 제작</p>
            <p>📌 Spotify API를 불러와 앨범 페이지에 적용</p>
            <div className='todo'>
               <p className='todo_title'>주요 업무 : </p>
               <p>설계 및 프론트엔드 담당</p>
            </div>
            <div className='todo'>
               <p className='todo_title'>담당 역할 :</p>
               <p>모든 페이지 CSS 및 반응형 미디어 쿼리, Git Action 관리</p>
            </div>
         </div>
      </div>
   );
}
