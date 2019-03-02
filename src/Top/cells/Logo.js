import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    toggle = () => {
        this.props.togglePage('Home');
    }
    render() {
        if (this.props.currentPage.toUpperCase() === 'HOME') {
            return (
                <div className='Logo' ><div className="logoStyles">codeWebverse</div></div>
            );
        }
        else {
            return (
                <div ><div onClick={this.toggle} className="logoStyles">codeWebverse</div></div>
            );
        }
    }
}


export default Logo;