import React, { Component } from 'react';
import './NavLink.css';

class NavLink extends Component {

    toggle = () => {
        this.props.togglePage(this.props.pageName);
    }

    render() {
        if (this.props.currentPage.toUpperCase() === this.props.children.toUpperCase()) {
            return (
                <div className={this.props.currentPage} ><div className="styles">{this.props.children}</div></div>
            );
        }
        else {
            return (
                <div ><div onClick={this.toggle} className="styles">{this.props.children}</div></div>
            );
        }
    }
}


export default NavLink;