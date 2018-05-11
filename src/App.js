import React, { Component } from 'react';
import { Login, NavBar } from './components';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {loggedIn: false};
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
    this.checkLogin();
  }
  checkLogin(){
    if(!this.state.loggedIn){
      this.renderPage = (<Login loginStatus={this.state.loggedIn} onLogin={this.changeLoginStatus}/>);
      this.userName = "Sign in";
    }
    else{
      //Home page for user
      this.renderPage = (<div>Yet to come</div>);
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
              {this.renderPage}
            </div>
    );
  }
}


export default App;
