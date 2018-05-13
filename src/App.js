import React, { Component } from 'react';
import { Login, NavBar } from './components';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    //Need to get from server the login status
    this.state = {loggedIn: false};
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
    this.checkLogin();
  }
  checkLogin(){
    if(!this.state.loggedIn){
      this.pageToRender = (<Login loginStatus={this.state.loggedIn} onLogin={this.changeLoginStatus}/>);
      this.userName = "Sign in";
    }
    else{
      //Home page for user
      this.pageToRender = (<div>Yet to come</div>);
      this.userName = this.fetchUserName();
    }
  }
  changeLoginStatus(loginStatus){
    this.setState({
      loggedIn: loginStatus
    });
    this.checkLogin();
  }
  fetchUserName(){
    return "Govi";
  }
  render() {
    return (<div>
              <NavBar username={this.userName}/>
              {this.pageToRender}
            </div>
    );
  }
}


export default App;
