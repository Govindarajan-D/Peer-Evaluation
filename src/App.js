import React, { Component } from 'react';
import { Login, NavBar, SignUp} from './components';
import { userReducer } from './reducers/userReducer';
import { userDetails } from './actions/userAction';
import { createStore } from 'redux';
import './App.css';

const store = createStore(userReducer);

class App extends Component {
  constructor(props){
    super(props);
    //Need to get from server the login status
    this.state = {loggedIn: false, signUp:true};
    this.checkLogin();
  }
  //Need to handle when clicked SignUp
  checkLogin = () => {
    if(!this.state.loggedIn){
      this.pageToRender = (<Login loginStatus={this.state.loggedIn} onLogin={this.changeLoginStatus} onSignUp={this.renderSignUp}/>);
      this.userName = "Sign in";
    }
    else{
      //Home page for user
      this.pageToRender = (<div>Yet to come</div>);
      this.userName = this.fetchUserName();
    }
  }
  changeLoginStatus = (loginStatus) => {
    store.dispatch(userDetails());
    this.setState({
      loggedIn: loginStatus
    });
    this.checkLogin();

  }
  renderSignUp = (userSignUp) => {
    this.pageToRender = (<SignUp />);
    this.setState({
      signUp:userSignUp
    });
  }
  fetchUserName = () => {
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
