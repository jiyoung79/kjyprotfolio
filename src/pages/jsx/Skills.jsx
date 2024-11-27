import React from 'react';
import '../css/Skills.style.css';
import Frontend from '../../component/frontend';
import Backend from '../../component/backend';

export default function Skills() {
   return (
      <div className='skills'>
         <h1 className='skills_title'>Skills</h1>
         <div className='skills_box'>
            <Frontend />
            <Backend />
         </div>
      </div>
   );
}
