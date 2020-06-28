import React, { Component } from 'react';
import './App.css';

import data from './data/data.json';

export default class App extends Component {
  render() {

    const lists = data.sort();

    return (
      <section className="container-fluid">
        <h1>JavaScript</h1>
        <ul className="list-unstyled">
          {lists.map(item => (
            <li key={lists.indexOf(item)}>
              <small>{item}</small>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}