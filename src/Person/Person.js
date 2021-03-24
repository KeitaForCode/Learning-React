import React from 'react';
//import styled from 'styled-components';
import classes from './Person.css';

// const StyleDiv = styled.div`
//         width: 60%;
//             margin: 16px auto;
//             border: 1px solid #eee;
//             box-shadow: 0 2px 3px rgb(54, 54, 54);
//             padding: 16px;
//             text-align: center;


//             @media (min-width: 500px){
//                 width: 450px;
//             }
// `;




const person = (props) => {

    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('something went wrong');
    // }
    return (
        //<div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>I am a {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>


    );
}

export default person;
