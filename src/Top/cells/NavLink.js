import React from 'react';
import './NavLink.css'

const navLink = (props) => {
    return (
        <div className={props.page}>{props.children}</div>
    );

}

export default navLink;