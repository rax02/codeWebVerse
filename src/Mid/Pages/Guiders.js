import React from 'react';
import './Guider.css';

const Guiders = (props) => {

    return (
        <div className='guiderStyles'>
            <div>
                clone repository in Github using SSH.
            <br></br>
                <p> SSH setup on your machine. :https://help.github.com/articles/generating-ssh-keys</p>
                <p>issues: SSH-ADD / Windows / Could not open a connection to your authentication agent.<br></br>
                    https://github.com/ritazh/devopsfun/issues/17</p>
            </div>
        </div>
    );
}

export default Guiders;