import React, { Component } from 'react';
import './App.css';

import data from './data/data.json';

import TableOfContents from './components/TableOfContents';
import Arrays from './components/Arrays';
import Conditions from './components/Conditions';
import DataTypes from './components/DataTypes';
import Events from './components/Events';
import Functions from './components/Functions';

export default class App extends Component {
  render() {

    const lists = data.sort();

    return (
      <>
      <h1>JavaScript</h1>
      {/* <TableOfContents /> */}
      {/* <Arrays /> */}
      {/* <Conditions /> */}
      {/* <DataTypes /> */}
      {/* <Events /> */}
      <Functions />
      <section className="container-fluid">
        <h2>Index</h2>
        <ul className="list-unstyled">
          {lists.map(item => (
            <li key={lists.indexOf(item)}>
              <small>{item}</small>
            </li>
          ))}
        </ul>
      </section>
      </>
    );
  }
}