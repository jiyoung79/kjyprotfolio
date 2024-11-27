import React, { useEffect, useRef } from 'react';
import '../css/card.style.css';
import gitImage from '../../images/git.png'; 

export default function Card1() {
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
               href='https://github.com/CATERPILLAR-TEAM/STAY_CONNECT'
               target='_blank'
               rel='noopener noreferrer'
               className='git_link'>
               <img src={gitImage} alt='git' className='git_img' />
            </a>
            <a href='https://stayconnect.shop/' className='card_button' target='_blank' rel='noopener noreferrer'>
               사이트 바로가기
            </a>
            <a
               href='https://github.com/CATERPILLAR-TEAM/STAY_CONNECT'
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
            <div className='stack_list'>Axios</div>
            <div className='stack_list'>jQuery</div>
            <div className='stack_list'>Thymeleaf</div>
            <div className='stack_list'>Spring Boot</div>
            <div className='stack_list'>Spring Security</div>
            <div className='stack_list'>MySQL</div>
            <div className='stack_list'>Docker</div>
         </div>
         <div className='card_t'>
            <h3 className='card_title'>프로젝트명 :</h3>
            <h3 className='card_subtitle'>Stay Connect</h3>
         </div>
         <div className='card_contents'>
            <p>📌 숙박업소와 실시간 채팅이 가능한 소켓 통신 기능을 추가하여 개발</p>
            <p className='sub'>(고객 서비스 향상과 예약 전환율 증가, 데이터 수집 및 분석 기대)</p>
            <p>📌 지도 좌표로 그 근처에 위치한 숙소를 추천해주는 기능을 추가하여 개발</p>
            <p className='sub'>(소비자가 원하는 좌표의 숙소 추천)</p>
            <p>📌 소셜 로그인 추가 및 KG이니시스 결제 API 기능 개발</p>
            <div className='todo'>
               <p className='todo_title'>주요 업무 : </p>
               <p>백엔드 및 프론트엔드 담당</p>
            </div>
            <div className='todo'>
               <p className='todo_title'>담당 역할 :</p>
               <p>index, MyPage, 전반적인 CSS, 결제API CRUD, MyPage 개인정보수정 CRUD</p>
            </div>
         </div>
      </div>
   );
}