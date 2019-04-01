import React from 'react';
import Card1 from '../../Elements/Cards/cards';
import { Button2 } from '../../Elements/Buttons/buttons';
import image1 from '../../Elements/Images/reactLogo.png';
import './Tools.css';

const Tools = (props) => {

    return (
        <div className='toolsStyles'>
            <div className='box'></div>

            <Button2> Front-end web development frameworks</Button2>
            <div className='grid'>

                <Card1 source={image1}>ReactJS</Card1>
                <Card1 source={image1}>Angular</Card1>
                <Card1 source={image1}>Vue</Card1>
                <Card1 source={image1}>Ember</Card1>
                <Card1 source={image1}>Backbone</Card1>
                <br></br>
            </div>
            <Button2> Back-end web development frameworks</Button2>
            <div className='grid'>

                <Card1 source={image1}>Express</Card1>
                <Card1 source={image1}>Django</Card1>
                <Card1 source={image1}>Rails</Card1>
                <Card1 source={image1}>Laravel</Card1>
                <Card1 source={image1}>Spring</Card1>
                <br></br>
            </div>
            <Button2>Database</Button2>
            <div className='grid'>

                <Card1 source={image1}>MySQL</Card1>
                <Card1 source={image1}>Oracle</Card1>
                <Card1 source={image1}>PostGRE</Card1>

                <br></br>
            </div>
            <Button2>Wireframing tools</Button2>
            <div className='grid'>

                <Card1 source={image1}>Sketch</Card1>
                <Card1 source={image1}>inVision</Card1>
                <Card1 source={image1}>Adobe XD</Card1>
                <Card1 source={image1}>Balsamiq</Card1>

                <br></br>
            </div>
            <Button2>Prototyping tools</Button2>
            <div className='grid'>

                <Card1 source={image1}>Sketch</Card1>
                <Card1 source={image1}>inVision</Card1>
                <Card1 source={image1}>Adobe XD</Card1>
                <Card1 source={image1}>Figma</Card1>

                <br></br>
            </div>
            <Button2>Color selector tools</Button2>
            <div className='grid'>

                <a href='https://color.adobe.com/create/color-wheel/' target='_blank'><Card1 source={image1}>Adobe Color</Card1></a>
                <a href='#' target='_blank'><Card1 source={image1}>Gradient selector</Card1></a>

                <br></br>
            </div>

        </div>
    );
}

export default Tools;