import React from 'react';
import './cards.css';



const Card1 = (props) => {
    return (<div className='card1'>

        <img width='100%' height='75%' src={props.source}></img>

        <div width='100%' height='25%' id='card1Bottom'>
            <strong> {props.children}</strong>
        </div>

    </div>);

}

export default Card1;