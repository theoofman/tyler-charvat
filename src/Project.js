import Icon from './Icon';
import website from './website.jpeg';
import './Project.css';
import { getByDisplayValue } from '@testing-library/react';

import useCollapse from 'react-collapsed';

function Project(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  var rows = [];
  for (var i = 0; i < props.languages.length; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<p key={i}>{props.languages[i]}</p>);
  }
  return (
    <div className="project collapsible">
      <div className="projectHeader" {...getToggleProps()}>
        <h3>
          {props.title} {isExpanded ? "▼" : "▲"}
        </h3>
      </div>
      <div className="projectBody" {...getCollapseProps()}>
        <a href={props.link} target="_blank">
        <div className="projectImage">
          <Icon icon={props.image} alt={props.title}/>
          <p className="projectDescription">{props.description}</p>
        </div>
        </a>
        <div className="projectFooter">
          <p>Languages:</p>
          <div className="projectLanguages">
            {rows}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
