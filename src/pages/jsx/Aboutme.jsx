import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Aboutme.style.css';
import imacImage from '/Users/gangjiyeong/vscode/kjyportfolio/src/images/imac.png';
import profile from '/Users/gangjiyeong/vscode/kjyportfolio/src/images/profile.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faSchool, faPen } from '@fortawesome/free-solid-svg-icons';

export default function Aboutme() {
   return (
      <div className='aboutme'>
         <h1 className='aboutme_title'>About Me</h1>
         <Row className='aboutme-row'>
            <Col md={6} className='text-center aboutme-image-col'>
               <div className='aboutme-image'>
                  <img src={imacImage} alt='iMac' className='aboutme-img' />
                  <h1 className='contact-title'>Information</h1>
                  <div className='info'>
                     <div className='icon'>
                        <FontAwesomeIcon icon={faCakeCandles} className='faicon' />
                        <p>1998. 07. 09</p>
                     </div>
                     <div className='icon-1'>
                        <FontAwesomeIcon icon={faSchool} className='faicon' />
                        <p>대구가톨릭대학교 생명공학과(중퇴)</p>
                     </div>
                     <div className='icon-2'>
                        <FontAwesomeIcon icon={faPen} className='faicon' />
                        <p>코리아IT아카데미 풀스택 개발자 양성과정 수료</p>
                     </div>
                  </div>
                  <div className='contact-container'>
                     <div className='contact-line'></div>

                     <div className='contact-item'>jy__0@naver.com</div>
                     <Link to='https://github.com/jiyoung79' target='_blank' className='contact-item'>
                        GITHUB
                     </Link>
                     <Link
                        to='https://glowing-windscreen-f69.notion.site/STUDY-LOG-9ab0b9f9c33640689b07920514af02fc?pvs=4'
                        target='_blank'
                        className='contact-item'>
                        NOTION
                     </Link>
                  </div>
               </div>
            </Col>

            <Col md={6} className='profile'>
               <div className='profile-image-container'>
                  <img src={profile} alt='Profile' className='profile-image' />

                  <span className='emoji emoji-1'>✨</span>
                  <span className='emoji emoji-2'>✨</span>
                  <span className='emoji emoji-3'>✨</span>
               </div>
               <div className='announce'>
                  <p>
                     <span className='highlight'>배움에 대한 갈증</span>이 있는 편이라 끊임없는 공부 및 자기개발을 통해
                  </p>
                  <p>
                     노력에 대한 가치를 스스로 높힐 수 있는 <span className='highlight'>개발</span>이라는 직군이 큰
                     장점으로 다가왔습니다.
                  </p>
                  <p>또한 제가 짠 코드 한 줄로 인해 화면 구성이 바뀌고, 기능 구현이 되는</p>
                  <p>
                     즉 <span className='highlight'>결과가 한 눈에 직접적으로 보이는 것</span>이 매력적인 부분이라고
                     생각하여
                  </p>
                  <p>이 직군을 선택하게 되었습니다.</p>
               </div>
               <div className='goal'>
                  <h1>💪 목표</h1>
                  <p>
                     🧐 사용자에 맞춰 <span className='highlight'>실용적인 UI</span>를 구축할 수 있는{' '}
                     <span className='highlight'>프론트엔드 개발자</span>,
                  </p>
                  <p>
                     🧐 <span className='highlight'>효율적인 로직</span>을 구축할 수 있는{' '}
                     <span className='highlight'>백엔드 개발자</span>가 되고 싶습니다.
                  </p>
               </div>
            </Col>
         </Row>
      </div>
   );
}
