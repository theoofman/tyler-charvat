import React from 'react';
import Project from './Project';
import website from './website.jpeg';
import algebra from './algebra.jpeg';
import './App.css';

function Projects(){
    return(
        <div className="projects">
            <Project title="Website" image={website} description="testing this is a website" link="/" />
            <Project title="Algebra" image={algebra} description="wow this actually works" link="https://github.com/theoofman/quadratic" />
        </div>
    )
}
function App(props){
    return(
        <div>
            <h1 className="title">Projects</h1>
            <Projects />
        </div>
    )
};

export default App;