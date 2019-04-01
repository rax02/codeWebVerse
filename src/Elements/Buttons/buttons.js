import React from 'react';
import './buttons.css';



export const Button1 = (props) => {
    return (<div className='button1'>

        {props.children}

    </div>);

}
export const Button2 = (props) => {
    return (<div className='button2'>

        {props.children}

    </div>);

}

export default Button1;
