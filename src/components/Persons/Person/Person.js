import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import styled from 'styled-components';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/Auth-context';

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




class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('something went wrong');
    // }
    render() {
        console.log('[Person.js] rendering...');
        //<div className="Person" style={style}>
        return (
            <Auxiliary>
                
                    {this.context.authenticated ? (
                    <p>Authenticated!</p> 
                    ): (
                     <p>Please log in</p>
                    )}
                
                <p key='i1' onClick={this.props.click}>I am a {this.props.name} and i am {this.props.age} years old</p>
                <p key='i2'>{this.props.children}</p>
                <input key='13'
                    type="text"
                    //ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
