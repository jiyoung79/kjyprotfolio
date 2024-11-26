import React, { useEffect, useRef } from 'react';
import '../css/card.style.css';
import gitImage from '/Users/gangjiyeong/vscode/kjyportfolio/src/images/git.png';

export default function Card5() {
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
               href='https://github.com/jiyoung79/React_RockPaperScissor'
               target='_blank'
               rel='noopener noreferrer'
               className='git_link'>
               <img src={gitImage} alt='git' className='git_img' />
            </a>
            <a
               href='https://jiyoung79.github.io/React_RockPaperScissor/'
               className='card_button'
               target='_blank'
               rel='noopener noreferrer'>
               사이트 바로가기
            </a>
            <a
               href='https://www.notion.so/ReadMe-14a305c4377180c09a33c4b54674dbf0?pvs=4'
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
         </div>
         <div className='card_t'>
            <h3 className='card_title'>프로젝트명 :</h3>
            <h3 className='card_subtitle'>가위바위보 앱</h3>
         </div>
         <div className='card_contents'>
            <p>📌 React를 사용하여 UI와 상태 관리에 중점을 두고 개발</p>

            <p>📌 각 버튼 클릭 시 선택한 값이 콜백 함수를 통해 전달되며 이후 컴퓨터의 랜덤 선택과 결과 비교가 도출</p>

            <div className='todo'>
               <p className='todo_title'>주요 업무 : </p>
               <p>리액트를 사용해 프론트엔드 개발 담당</p>
            </div>
         </div>
      </div>
   );
}
