import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
      <h1>Projects</h1>
        <ul>
          <li>Tic-tac-toe</li>
          <li>Treasure Hunt</li>
          <li>Robot</li>
          <li>
            <a href="https://github.com/LEARNAcademy/react-router-andbears/tree/master/exercises/01-portfolio-site">
              Git | LEARN Portfolio Site Challenge
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
