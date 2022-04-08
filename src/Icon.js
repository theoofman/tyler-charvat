import React from 'react';

function Icon(props){
    return(
        <div>
            <img className="icon" src={props.icon} alt={props.alt} />
        </div>
    )
};

export default Icon;