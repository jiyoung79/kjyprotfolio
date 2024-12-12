import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Aboutme.style.css';
import imacImage from '../../images/imac.png';
import profile from '../../images/profile.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faSchool, faPen } from '@fortawesome/free-solid-svg-icons';

export default function Aboutme() {
   return (
      <div className='aboutme'>
         <div className='aboutme-aurora'>
            <div className='aboutme-box'>
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
                        {/* <p>또한 제가 짠 코드 한 줄로 인해 화면 구성이 바뀌고, 기능 구현이 되는</p>
                        <p>
                           즉 <span className='highlight'>결과가 한 눈에 직접적으로 보이는 것</span>이 매력적인
                           부분이라고 생각하여
                        </p>
                        <p>이 직군을 선택하게 되었습니다.</p> */}
                     </div>
                     <div className='goal'>
                        <h1>💪 목표</h1>
                        <p>
                           🧐 다양한 팀원들과의 <span className='highlight'>원활한 소통을 통해 고객의 니즈</span>를
                           반영한 기획과 프로모션을 성공적으로 이끌어내는 MD
                        </p>
                        <p>
                           🧐 <span className='highlight'>지속적으로 트렌드를 학습</span>하고 시장의 변화를 선도하며
                           패션 업계에서 꼭 필요한 인재로 자리 매김 하겠습니다.
                        </p>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      </div>
   );
}
