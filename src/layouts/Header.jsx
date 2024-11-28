import React from 'react';
import './css/Header.style.css';

export default function Header() {
   const handleScroll = sectionId => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <div className='header'>
         <div className='header-item' onClick={() => handleScroll('aboutme')}>
            {'< About />'}
         </div>
         <div className='header-item' onClick={() => handleScroll('skills')}>
            {'< Skills />'}
         </div>
         <div className='header-item' onClick={() => handleScroll('projects')}>
            {'< Projects />'}
         </div>
      </div>
   );
}
