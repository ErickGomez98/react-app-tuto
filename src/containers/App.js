import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructutor ', props);
    this.state = {
      persons: [
        {id: 1, name: 'Max', age: 28},
        {id: 2, name: 'Erick', age: 19}
      ],
      ohterState: 'Some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js], Inside componentDidMount');
  }


  nameChangedHandler = (event, id) => {

    // Es como la función de .map(), recibe una función para hacer una comparación, y regresa true o false si lo encontró
    // o no en base a la comparación que le asignamos.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Hay que crear una copia del objeto de la persona que se encontro mediante el index para no modificar el original
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    // Después creamos una copia de tod0 el array de personas, y en base al index, solo modificamos ese objeto (persona)
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = (personIndex) => {
    /* Hacerlo de esta manera esta mal, porque se esta modificando el valor original de this.state.persons y
     no debe de ser asi, por lo tanto se tiene que crear una copia y ahora si manipularlo.
    const persons = this.state.persons;
    */

    // Entonces para hacer una copia, simplemente se usa el spread operator (...)
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    console.log('[App.js] Inside Render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;