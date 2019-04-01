import React from 'react';
import { Button1, Button2 } from '../../Elements/Buttons/buttons';
import { Card1, Card2 } from '../../Elements/Cards/cards';
import './Assets.css';

const Assets = (props) => {

    return (
        <div className='assetsStyles'>
            <div className='box'></div>
            <Button2> Buttons</Button2>
            <div className='grid'>

                <Button1>Button</Button1>
                <Button2>Button</Button2>


                <br></br>
            </div>
            <div className='box'></div>
            <Button2>Cards</Button2>
            <div className='grid'>

                <Card1>Card</Card1>
                <Card2>Card</Card2>

                <br></br>
            </div>
        </div>
    );
}

export default Assets;