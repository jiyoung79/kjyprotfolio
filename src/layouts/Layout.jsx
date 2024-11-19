import React from 'react';
import './css/Layout.style.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../pages/jsx/Dashboard';
import Aboutme from '../pages/jsx/Aboutme';
import Archiving from '../pages/jsx/Archiving';
import Projects from '../pages/jsx/Projects';
import Skills from '../pages/jsx/Skills';

export default function Layout() {
    return <div>
        <Header />
        <Dashboard />
        <Aboutme />
        <Skills />
        <Archiving />
        <Projects />
   </div>;
}