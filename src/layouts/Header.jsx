import React from 'react';
import './css/Header.style.css';

export default function Header() {
   return (
      <div className='header'>
         <div className='header-item'>{'< About />'}</div>
         <div className='header-item'>{'< Skills />'}</div>
         <div className='header-item'>{'< Projects />'}</div>
         <div className='header-item'>{'< Contact />'}</div>
      </div>
   );
}
