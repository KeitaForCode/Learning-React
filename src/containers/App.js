import React, { Component } from "react";
//import styled from 'styled-components';


import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const StyleButton = styled.button`
//     background-color:  ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;
//     box-shadow: 0 3px 4px black;
//     border-radius: 4px;

//     &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
//             }
// `;

// import UserInput from "./UserInput/UserInput"
// import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'leoads', name: 'Leo', age: 28 },
            { id: 'asikcj', name: 'Mahawa', age: 26 },
            { id: 'ikdikfs', name: 'Lasso', age: 30 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true
    };


    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;

    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }


    switchNameHandler = (newName) => {
        // console.log('was clicked');
        // DON'T DO THIS: this.state.persons[0].name = 'Losene';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Mayama', age: 27 },
                { name: 'Fatu', age: 33 }
            ],
        })
    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        //const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value

        const persons = [...this.state.persons];
        persons[personIndex] = person

        this.setState({ persons: persons });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({ showPersons: !doesShow })
    }

    deletePersonHandler = (personsIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personsIndex, 1);
        this.setState({ persons: persons });
    }

    // state = {
    //     username: 'superLeo'
    // }

    // usernameChangeHandler = (event) => {
    //     this.setState({ username: event.target.value });
    // }

    render() {
        console.log('[App.js] render')

        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     boxShadow: '0 3px 4px black',
        //     borderRadius: '4px',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color: 'black'
        //     }
        // }

        let persons = null;


        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;

        }
        /* <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person name={this.state.persons[1].name}
                        click={this.switchNameHandler.bind(this, 'Los!')}
                        changed={this.nameChangeHandler} age={this.state.persons[1].age}>My Hobbie: Farmer</Person>
                    <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age} /> */




        return (
            <div className={classes.App}>
                <button onClick={() => {
                    this.setState({ showCockpit: false });
                }}>Remove Cockpit</button>
                {this.state.showCockpit ? (<Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler} />) : null}
                {persons}




                {/* <ol>
                    <li>Create two new components: userInput and userOutput</li>
                    <li>Userinput show holds and input element, UserOutput two paragraphs</li>
                    <li>Output multiple UserOutput components in the app component(any paragraph text of your choice)</li>
                    <li>Pass a username(of your choice) to UserOutput via props and display it there</li>
                    <li>Add state to the app component(=> the username) and pass the username to the UserOutput component</li>
                    <li>Add the method to manipulate the state(=> an event-handler-method)</li>
                    <li>Pass the event-handler method reference to the UserInput component and bind it to the input changed event</li>
                    <li>Ensure that the new input entered by the user overwrites the old username pass to UserOutput</li>
                    <li>Add two way binding to your input(in UserInput) to also display the starting username</li>
                    <li>Add styling of your choice to your components/ elements in the component both with inlines styles and stylesheets</li>

                </ol>
                <UserInput changed={this.usernameChangeHandler}
                    currentName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Leo" /> */}

            </div>
        );

        ///return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;