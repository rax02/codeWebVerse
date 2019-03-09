import React, { Component } from 'react';

class SignIn extends Component {

    toggle1 = () => {
        this.props.togglePage('SignInPage');
    }
    toggle2 = () => {
        this.props.togglePage('Dashboard');
    }


    render() {
        if (this.props.signedIn === 'false') {
            return (
                <div>
                    <button onClick={this.toggle1}>SIGN IN</button>
                </div>
            );
        } else {
            return (
                <div onClick={this.toggle2}> hello</div>
            );
        }
    }
}

export default SignIn;