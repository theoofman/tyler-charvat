import React from 'react';
import Project from './Project';
import website from './website.jpeg';
import algebra from './algebra.jpeg';
function Projects(){
    return(
        <>
        <h1 className="title">Projects</h1>
        <div className="projects">
            <Project title="Website" image={website} description="Portfolio website built using React.js" link="https://github.com/theoofman/tyler-charvat" />
            <Project title="Quadratic Calculator" image={algebra} description="Basic Quadratic Calculator using Python and Tkinter" link="https://github.com/theoofman/quadratic" />
        </div>
        </>
    )
}

export default Projects;