import React, { Component } from 'react';
import { icons } from 'feather-icons';

class App extends Component {
  render() {
    return <div>{Object.keys(icons).map(icon => <div>{icon}</div>)}</div>;
  }
}

export default App;
