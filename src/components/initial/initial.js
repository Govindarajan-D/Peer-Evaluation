import React, {Component} from "react";
import {Login,SignUp,NavBar} from "../index.js";
import {connect} from "react-redux";
import "./initial.css";

const mapStateToProps = state => {
  return {PUserName: state.user_details};
};

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
      }
      renderSignUp = (userSignUp) => {
        this.pageToRender = (<SignUp />);
        this.setState(this.state);
      }
      fetchUserName = () => {
        console.log(this.props.PUserName);
      }
      render() {
        return (<div>
                  <NavBar username={this.userName}/>
                  {this.pageToRender}
                </div>
        );
      }
}

const InitialComponent = connect(mapStateToProps)(Initial);
export {InitialComponent as Initial};
