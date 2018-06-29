import React, {Component} from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Erick', age: 19}
    ],
    ohterState: 'Some other value',
    showPersons: false
  };

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi I am a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;