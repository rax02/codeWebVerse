import React, { Component } from 'react';
import './SignInButton.css';
import Button1 from '../../Elements/Buttons/buttons';

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
                <div className='signInButtonStyles' onClick={this.toggle1}>
                    <Button1 >SIGN IN</Button1>
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