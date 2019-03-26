import React, { Component } from 'react';
import Card1 from '../../Elements/Cards/cards';
import './Learn.css';
import image1 from '../../Elements/Images/reactLogo.png';
import image2 from '../../Elements/Images/htmlLogo.png';
import image3 from '../../Elements/Images/embedded-cLogo.png';
class Learn extends Component {
    render() {
        return (
            <div className='learnStyles'>
                <div className='box'></div>
                <strong> Web development</strong>
                <div className='grid'>

                    <Card1 source={image1}>ReactJS</Card1>
                    <Card1 source={image1}>ReactJS</Card1>
                    <Card1 source={image1}>ReactJS</Card1>
                    <Card1 source={image1}>ReactJS</Card1>
                    <Card1 source={image2}>HTML</Card1>
                    <br></br>
                </div>

                <strong> Embedded System | IOT</strong>
                <div className='grid'>


                    <Card1 source={image3}>Embedded C</Card1>
                    <br></br>
                </div>


            </div>
        );
    }

}

export default Learn;