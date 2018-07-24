import React from 'react';
import {Initial} from './components/index';
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
