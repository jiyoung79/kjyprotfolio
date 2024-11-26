import React from 'react';
import '../css/Projects.style.css';
import Card1 from './component/Card/Card1';
import Card2 from './component/Card/Card2';
import Card4 from './component/Card/Card4';
import Card3 from './component/Card/Card3';
import Card5 from './component/Card/Card5';
import Card6 from './component/Card/Card6';

export default function Projects() {
   return (
      <div className='projects'>
         <h1 className='projects_title'>Projects</h1>
         <div className='card_1'>
            <Card1 />
         </div>
         <div className='card_2'>
            <Card2 />
         </div>
         <div className='card_3'>
            <Card3 />
         </div>
         <div className='card_4'>
            <Card4 />
         </div>
         <div className='card_5'>
            <Card5 />
         </div>
         <div className='card_6'>
            <Card6 />
         </div>
      </div>
   );
}
