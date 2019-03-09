import React, { Component } from 'react';
import Logo from './cells/Logo';
import NavBar from './cells/NavBar';
import Search from './cells/Search';
import SignInButton from './cells/SignInButton';
import './Top.css';


class Top extends Component {



    render() {
        return (<div>
            <nav className="flex-container top-nav">
                <Logo togglePage={this.props.togglePage} currentPage={this.props.currentPage} />
                <NavBar togglePage={this.props.togglePage} currentPage={this.props.currentPage} />

                <Search />
                <SignInButton togglePage={this.props.togglePage} currentPage={this.props.currentPage} signedIn={this.props.signedIn} />
            </nav>

        </div>

        );
    }
}

export default Top;
