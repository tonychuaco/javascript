import React, { Component } from 'react';
import './App.css';

import data from './data/data.json';

import TableOfContents from './components/TableOfContents';
import Arrays from './components/Arrays';

export default class App extends Component {
  render() {

    const lists = data.sort();

    return (
      <>
      <h1>JavaScript</h1>
      {/* <TableOfContents /> */}
      <Arrays />
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