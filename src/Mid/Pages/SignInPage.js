import React, { Component } from 'react';
import './SignInPage.css';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onChangeEmail = (event) => {
        this.setState({ signInEmail: event.target.value });
    }
    onChangePassword = (event) => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(response => response.json())
            .then(() => { console.log('success'); })

    }

    render() {
        return (
            <div className='signInPageStyles'><div className='box'></div>
                <div className='signInCard'>codeWebverse<br></br>
                    <input onChange={this.onChangeEmail} type='email' placeholder='email'></input><br></br>
                    <input onChange={this.onChangePassword} type='password' placeholder='password'></input><br></br>
                    <input onClick={this.onSubmitSignIn} type='submit' value='Sign In'></input><br></br>

                </div><br></br>
                <div className='signInCard'>
                    Don't have account? Sign Up<br></br><br></br>
                    <input type='text' placeholder='name'></input><br></br>
                    <input type='email' placeholder='email'></input><br></br>
                    <input type='password' placeholder='password'></input><br></br>
                    <input type='submit' value='Sign Up'></input><br></br>
                </div>
            </div>
        );
    }
}

export default SignInPage;