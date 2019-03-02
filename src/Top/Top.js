import React, { Component } from 'react';
import Logo from './cells/Logo';
import NavBar from './cells/NavBar';
import Search from './cells/Search';
import './Top.css';


class Top extends Component {



    render() {
        return (<div>
            <nav className="flex-container top-nav">
                <Logo togglePage={this.props.togglePage} currentPage={this.props.currentPage} />
                <NavBar togglePage={this.props.togglePage} currentPage={this.props.currentPage} />

                <Search />
            </nav>

        </div>

        );
    }
}

export default Top;
