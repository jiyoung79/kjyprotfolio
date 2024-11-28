import React, { useEffect, useState } from 'react';
import './css/frontend.style.css';

export default function Frontend() {
   const [isVisible, setIsVisible] = useState(false);

   const skills = [
      { name: 'HTML5', percentage: 80 },
      { name: 'CSS3', percentage: 80 },
      { name: 'JavaScript', percentage: 70 },
      { name: 'jQuery', percentage: 50 },
      { name: 'React', percentage: 70 },
      { name: 'Vue', percentage: 50 },
      { name: 'SCSS', percentage: 60 },
      { name: 'Bootstrap', percentage: 70 },
      { name: 'Figma', percentage: 50 },
   ];

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY + window.innerHeight; // 현재 스크롤 위치 + 뷰포트 높이
         const triggerPosition = 1400;
         if (scrollPosition >= triggerPosition) {
            setIsVisible(true);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div className='frontend'>
         <h1 className='frontend_title'>Frontend</h1>
         <div className='frontend-container'>
            {skills.map((skill, index) => (
               <div className='frontend-skill' key={index}>
                  <span className='frontend-name'>{skill.name}</span>
                  <div className='frontend-bar'>
                     <div
                        className='frontend-percentage'
                        style={{
                           width: isVisible ? `${skill.percentage}%` : '0%',
                           transition: 'width 3s ease-in-out',
                        }}>
                        {skill.percentage}%
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
