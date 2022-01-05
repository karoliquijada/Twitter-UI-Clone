import SideBar from './components/SideBar/SideBar';
import Wall from './components/Wall/Wall';
import { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="layout">
        <SideBar/>                 
        <Wall/>     
      </div>
     
    );
  } 
}

export default App;
