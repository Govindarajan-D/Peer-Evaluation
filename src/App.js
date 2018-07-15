import React, { Component } from 'react';
import {Initial} from './components';
import { userReducer } from './reducers/userReducer';
import { userDetails } from './actions/userAction';
import store from "./store/index";
import './App.css';

class App extends Component {
  render(){
    return (<Initial />);
  }
}


export default App;
