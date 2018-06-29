import React from 'react';
import styles from './Person.css';

const Person = (props) => {
  return (
    <div className={styles.Person}>
      <h1 onClick={props.click}>Hey I'm a {props.name} and i'm {props.age} years old </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default Person;