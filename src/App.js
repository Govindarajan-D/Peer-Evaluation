import React, { Component } from 'react';
import {Initial} from './components/index';
import { userReducer } from './reducers/userReducer';
import { userDetails } from './actions/userAction';
import {Provider} from "react-redux";
import store from "./store/index";
import './App.css';

class App extends React.Component {
  render(){
    return (
    <Provider store={store}>
    <Initial />
    </Provider>);
  }
}


export default App;
