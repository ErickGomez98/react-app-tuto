import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructutor ', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js], Inside componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // Sirve para poder decidir si hace render o no del componente, si regresa true si lo renderiza, si regresa
  // falso, lo detiene y no renderiza el component.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');
    return (
      this.props.persons.map((person, index) => {
          return <Person
            click={() => this.props.clicked(index)}
            position={index}
            name={person.name}
            age={person.age}
            ref={this.lastPersonRef}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}/>
        }
      )
    );
  }
}

export default Persons;