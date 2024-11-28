import React from 'react';
import './css/Layout.style.css';
import Header from './Header';
import Dashboard from '../pages/jsx/Dashboard';
import Aboutme from '../pages/jsx/Aboutme';
import Projects from '../pages/jsx/Projects';
import Skills from '../pages/jsx/Skills';

export default function Layout() {
   return (
      <div className='layout'>
         <Header />
         <div id='dashboard'>
            <Dashboard />
         </div>
         <div id='aboutme'>
            <Aboutme />
         </div>
         <div id='skills'>
            <Skills />
         </div>
         <div id='projects'>
            <Projects />
         </div>
      </div>
   );
}
