import React, { Component } from 'react';
import './Home.css';
import image from './softwareEngineer.png';

class Home extends Component {

    render() {
        return (
            <div className='homeStyles'>

                <img className='homeImage' src={image} alt='loadinggggg'></img>
            </div>
        );
    }
}


export default Home;