import React from 'react';
import NavLink from './NavLink';
import './NavBar.css';




const navBar = (props) => {
    return (<div>
        <nav>
            <NavLink page={props.page}>LEARN</NavLink>
            <NavLink>ASSETs</NavLink>
            <NavLink>GUIDERs</NavLink>
            <NavLink>COMMUNITY</NavLink>
            <NavLink>BLOGs</NavLink>

        </nav>
    </div>);
}

export default navBar;