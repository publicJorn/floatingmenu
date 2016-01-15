import React, { Component } from 'react';
import { Counter } from './Counter/Counter';
import { NICE, SUPER_NICE } from './colors';

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}
