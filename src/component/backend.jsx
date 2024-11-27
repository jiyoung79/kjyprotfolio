import React, { useEffect, useState } from 'react';
import './css/backend.style.css';

export default function Backend() {
   const [isVisible, setIsVisible] = useState(false);

   const skills = [
      { name: 'Java', percentage: 70 },
      { name: 'Spring', percentage: 60 },
      { name: 'Spring Boot', percentage: 70 },
      { name: 'Spring Security', percentage: 70 },
      { name: 'MySQL', percentage: 80 },
      { name: 'MyBatis', percentage: 50 },
      { name: 'JSP', percentage: 50 },
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
      <div className='backend'>
         <h1 className='backend_title'>Backend</h1>
         <div className='backend-container'>
            {skills.map((skill, index) => (
               <div className='backend-skill' key={index}>
                  <span className='backend-name'>{skill.name}</span>
                  <div className='backend-bar'>
                     <div
                        className='backend-percentage'
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
