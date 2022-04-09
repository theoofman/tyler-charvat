import React from 'react';
import Project from './Project';
import website from './website.jpeg';
import algebra from './algebra.jpeg';
function Projects(){
    return(
        <>
        <h1 className="title">Projects</h1>
        <div className="projects">
            <Project title="Website" image={website} description="Portfolio Website that demonstrates knowledge of html, css styling, and react.js" link="https://github.com/theoofman/tyler-charvat" languages={["Javascript","React.js"]} />
            <Project title="Quadratic Calculator" image={algebra} description="Basic Quadratic Calculator that demonstrates ability to create algorithms and basic use of python command line arguments" link="https://github.com/theoofman/quadratic" languages={["Python"]} />
        </div>
        </>
    )
}

export default Projects;