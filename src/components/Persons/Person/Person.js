import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructutor ', props);
    this.inputElement = React.createRef();

  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js], Inside componentDidMount');

    // Solo para que haga focus al primer input
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

  render() {
    console.log('[Person.js], Inside render');
    return (
      <div className={classes.Person}>
        <h1 onClick={this.props.click}>Hey I'm a {this.props.name} and i'm {this.props.age} years old </h1>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </div>
    );
  }
}

/**
 * Define los tipos de dataos que deben de recibir como propiedades
 * @type {{click: shim, name: shim, age: shim, change: shim}}
 */
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default Person;