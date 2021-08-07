import SideBar from './components/SideBar/SideBar';
import TweetList from './components/TweetsWall/TweetList';
import TweetInput from './components/TweetInput/TweetInput';
import './App.css';
import {Component} from 'react';
import { tweets } from './tweets';

class App extends Component {
  render () {
    return (
      <div className="flex">
         <SideBar/>
         <TweetInput/>
         <TweetList tweets = { tweets }/>
      </div>
     
    );
  } 
}

export default App;
