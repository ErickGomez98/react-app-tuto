import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructutor ', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js], Inside componentDidMount');
  }
  render() {
    console.log('[Person.js], Inside render');
    return (
      <div className={classes.Person}>
        <h1 onClick={this.props.click}>Hey I'm a {this.props.name} and i'm {this.props.age} years old </h1>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;