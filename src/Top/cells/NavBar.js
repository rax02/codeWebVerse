import React, { Component } from 'react';
import NavLink from './NavLink';
import './NavBar.css';


class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="flex-container navBar-nav">

                    <NavLink togglePage={this.props.togglePage} pageName='Learn' currentPage={this.props.currentPage}>LEARN</NavLink>
                    <NavLink togglePage={this.props.togglePage} pageName='Assets' currentPage={this.props.currentPage}>ASSETs</NavLink>
                    <NavLink togglePage={this.props.togglePage} pageName='Guiders' currentPage={this.props.currentPage}>GUIDERs</NavLink>
                    <NavLink togglePage={this.props.togglePage} pageName='Tools' currentPage={this.props.currentPage}>TOOLs</NavLink>
                    <NavLink togglePage={this.props.togglePage} pageName='Articles' currentPage={this.props.currentPage}>ARTICLEs</NavLink>
                    <NavLink togglePage={this.props.togglePage} pageName='Community' currentPage={this.props.currentPage}>COMMUNITY</NavLink>

                </nav>
            </div>);
    }

}



export default NavBar;