import React from 'react';
import '../css/Projects.style.css';
import Card1 from './component/Card/Card1';

export default function Projects() {
    return (
       <div className='projects'>
            <h1 className='projects_title'>Projects</h1>
            <Card1 />
       </div>
    );
}
