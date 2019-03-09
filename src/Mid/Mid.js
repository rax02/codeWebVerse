import React, { Component } from 'react';
import './Mid.css';
import Home from './Pages/Home';
import Learn from './Pages/Learn';
import Assets from './Pages/Assets';
import Guiders from './Pages/Guiders';
import Tools from './Pages/Tools';
import Articles from './Pages/Articles';
import Community from './Pages/Community';
import Search from './Pages/Search';
import SignInPage from './Pages/SignInPage';
import Dashboard from './Pages/Dashboard';

class Mid extends Component {
    render() {
        if (this.props.currentPage === 'Home') {
            return (
                <div className="">


                    <Home />

                </div>
            );
        }
        else if (this.props.currentPage === 'Learn') {
            return (
                <div className="">
                    <Learn />
                </div>
            );
        }
        else if (this.props.currentPage === 'Assets') {
            return (
                <div className="">

                    <Assets />
                </div>
            );
        }
        else if (this.props.currentPage === 'Guiders') {
            return (
                <div className="">
                    <Guiders />
                </div>
            );
        }
        else if (this.props.currentPage === 'Tools') {
            return (
                <div className="">
                    <Tools />
                </div>
            );
        }
        else if (this.props.currentPage === 'Articles') {
            return (
                <div className="">
                    <Articles />
                </div>
            );
        }
        else if (this.props.currentPage === 'Community') {
            return (
                <div className="">
                    <Community />
                </div>
            );
        }
        else if (this.props.currentPage === 'Search') {
            return (
                <div className="">Search Result
                <Search />
                </div>
            );
        }
        else if (this.props.currentPage === 'SignInPage') {
            return (
                <div className="">
                    <SignInPage />
                </div>
            );
        }
        else if (this.props.currentPage === 'Dashboard') {
            return (
                <div className="">
                    <Dashboard />
                </div>
            );
        }
    }
}

export default Mid;