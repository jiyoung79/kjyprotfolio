import React, { useEffect, useRef } from 'react';
import '../css/card.style.css';
import gitImage from '../../images/git.png';

export default function Card4() {
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
              href='https://github.com/jiyoung79/H-M-Clone-coding'
              target='_blank'
              rel='noopener noreferrer'
              className='git_link'>
              <img src={gitImage} alt='git' className='git_img' />
           </a>
           <a
              href='https://hnmclonecoding.netlify.app/'
              className='card_button'
              target='_blank'
              rel='noopener noreferrer'>
              사이트 바로가기
           </a>
           <a
              href='https://www.notion.so/H-M-ReadMe-14a305c4377180b7a8ddc2b58f44ac3d?pvs=4'
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
           <div className='stack_list'>React Router Dom</div>
           <div className='stack_list'>React Router</div>
        </div>
        <div className='card_t'>
           <h3 className='card_title'>프로젝트명 :</h3>
           <h3 className='card_subtitle'>H&M 클론코딩</h3>
        </div>
        <div className='card_contents'>
           <p>📌 기존 H&M 사이트를 클론코딩</p>

           <p>📌 전체상품페이지, 로그인, 상품상세페이지로 구성</p>

           <p>📌 키워드로 상품 검색 가능</p>
           <p>📌 상품 디테일을 눌렀으나, 로그인이 되어있지 않은 경우에는 로그인 페이지를 요청</p>
           <p>📌 로그인이 되어있을 경우에는 상품 디테일 페이지 접속 가능</p>

           <div className='todo'>
              <p className='todo_title'>담당 역할 :</p>
              <p>리액트, 리액트쿼리, 리액트 라우터 돔을 사용한 클론코딩</p>
           </div>
        </div>
     </div>
  );
}
