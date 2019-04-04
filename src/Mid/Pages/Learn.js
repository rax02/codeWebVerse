import React, { Component } from 'react';
import Card1 from '../../Elements/Cards/cards';
import './Learn.css';
import image1 from '../../Elements/Images/reactLogo.png';
import image2 from '../../Elements/Images/htmlLogo.png';
import image3 from '../../Elements/Images/embedded-cLogo.png';
import { Button2 } from '../../Elements/Buttons/buttons';
import ReactJS from '../Tutorials/ReactJS';
import HTML from '../Tutorials/HTML';
class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorial: 'none'
        };
    }

    ReactJST = () => {
        this.setState({ tutorial: 'ReactJS' });
    }
    ReactJST = () => {
        this.setState({ tutorial: 'ReactJS' });
    }
    ReactJST = () => {
        this.setState({ tutorial: 'ReactJS' });
    }
    ReactJST = () => {
        this.setState({ tutorial: 'ReactJS' });
    }
    HTMLT = () => {
        this.setState({ tutorial: 'HTMLT' });
    }


    render() {
        if (this.state.tutorial === 'none')
            return (
                <div className='learnStyles'>
                    <div className='box'></div>
                    <Button2> Web development</Button2>
                    <div className='grid'>

                        <div onClick={this.ReactJST}> <Card1 source={image1}>ReactJS</Card1></div>
                        <div onClick={this.ReactJST}> <Card1 source={image1}>ReactJS</Card1></div>
                        <div onClick={this.ReactJST}> <Card1 source={image1}>ReactJS</Card1></div>
                        <div onClick={this.ReactJST}> <Card1 source={image1}>ReactJS</Card1></div>

                        <div onClick={this.HTMLT}><Card1 source={image2}>HTML</Card1></div>
                        <br></br>
                    </div>

                    <Button2> Embedded System | IOT</Button2>
                    <div className='grid'>


                        <Card1 source={image3}>Embedded C</Card1>
                        <br></br>
                    </div>
                    <Button2> Version control</Button2>
                    <div className='grid'>


                        <Card1 source={image3}>Git</Card1>
                        <Card1 source={image3}>GitHub</Card1>
                        <br></br>
                    </div>


                </div >
            );
        else if (this.state.tutorial === 'ReactJS')
            return (<ReactJS></ReactJS>);
        else if (this.state.tutorial === 'HTMLT')
            return (<HTML></HTML>);
    }

}

export default Learn;