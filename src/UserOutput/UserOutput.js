import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>I wish to be a very good react developer</p>
        </div>
    );
};

export default userOutput;