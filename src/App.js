import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import Content from './Components/Content'
import UnderWaterNew from './Forms/underWater/new'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
        <Content/>
      </div>
    );
  }
}

export default App;
