import React, {Component} from "react";
import {login,signup,navbar} from "../index.js";
import "./initial.css";

class Initial extends React.Component{
    constructor(props){
        super(props);
        //Need to get from server the login status
        this.state = {loggedIn: false, signUp:true};
        this.checkLogin();
      }
      //Need to handle when clicked SignUp
      checkLogin = () => {
        if(!this.state.loggedIn){
          //Bug - Only when login is pressed twice, the home page opens
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
        this.setState(store.getState());
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
        return "Govi2";
      }
      render() {
        return (<div>
                  <NavBar username={this.userName}/>
                  {this.pageToRender}
                </div>
        );
      }
}
export default initial;
