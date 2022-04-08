import Icon from './Icon';
import website from './website.jpeg';
import './Project.css';
import { getByDisplayValue } from '@testing-library/react';

import useCollapse from 'react-collapsed';

function Project(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="project collapsible">
      <div className="projectHeader" {...getToggleProps()}>
        <h1>
          {props.title} {isExpanded ? "▼" : "▲"}
        </h1>
      </div>
      <div className="projectBody" {...getCollapseProps()}>
        <a href={props.link} target="_blank">
        <div className="projectImage">
          <Icon icon={props.image} alt={props.title}/>
          <p className="projectDescription">{props.description}</p>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
