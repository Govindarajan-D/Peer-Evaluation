import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {userDetails} from "../../actions/userAction";
import {connect} from "react-redux";
import './login.css'

//This code can be removed before moving to production
const googleResponse = (response) => {
    console.log(response);
}
const mapDispatchToProps = dispatch => { 
    return{
        passUserName: userName => dispatch(userDetails(userName))
    };
};
class Login extends Component{
    constructor(props){
        super(props);
    }
    logIn = (e) => {
        var usrname = "Govi";
        this.props.passUserName({usrname});
        this.props.onLogin(true);
    }
    handleSignUpClick = (e) => {
        this.props.onSignUp(true);
    }
    render(){
        return (<div className="login">
                <div className="login-container">
                <div className="login-leftContainer">
                <div className="login-left">
                        <span className="login-title">Login</span>
                        <div className="login-crux">
                        <div className="login-typical">
                            <input className="login-fieldInput" type="text" name="username" placeholder="Username"></input><br/><br/>
                            <input className="login-fieldInput" type="password" name="password" placeholder="Password"></input>
                        </div>
                        <br/>
                        <div><button className="login-loginButton" onClick={this.logIn}>Log in</button></div>
                        <span className="login-OR">or</span>
                        <div className="login-googleLogin">
                        <GoogleLogin
                        clientId="822257837053-n0t5fcd9gmf972t8qu826haj6kouverp.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={googleResponse}
                        onFailure={googleResponse}/>
                        </div>
                        </div>
                        <br/>
                        <span className="login-SignUpLink">Don't have an account? <button onClick={this.handleSignUpClick}>Sign up</button> here</span>
            </div>
            </div>
            <div className="login-splitBorder"></div>
            <div className="login-rightContainer">
            <div className="login-right">
                <span>Login to access:</span><br/>
                    <ul>
                        <li>creating groups to connect with people of similar requirements</li>
                        <li>post your contents for peer evaluation</li>
                        <li>review the contents posted by peers just like you</li>
                    </ul>
            </div>
            </div>
            </div>
            </div>);
    }
}

const LoginConnected = connect(null,mapDispatchToProps)(Login);

export {LoginConnected as Login};