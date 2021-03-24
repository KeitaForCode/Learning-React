import React from 'react';
import Radium from 'radium';

const userInput = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    const inputStyle = {
        border: '2px solid #777',
        borderRadius: '4px',
        boxShadow: '0 3px 4px black',
        marginLeft: '30%'
    }
    return <input type="text"
        style={inputStyle, style}
        onChange={props.changed}
        value={props.currentName} />;
};

export default Radium(userInput);