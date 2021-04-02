import React, { PureComponent } from 'react';


import Person from './Person/Person';
//import AuthContext from '../../context/Auth-context'


class Persons extends PureComponent {

    // componentDerivedStateFromProps(prpps, state) {
    //     console.log('[Persons.js] componentDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Person.js] componentWillReceiveProps', props);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' };
    }

    // componentWillUpdate(){

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }


    render() {
        console.log('[Persons.js] rendering...');
        return (this.props.persons.map((person, index) => {

            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />

            );
        })
        );
    };
}


export default Persons;