import React from 'react';
import './navbar.css';

class NavBar extends React.Component{
    render(){
        return(<div className="navbar-header">
                <span className="navbar-title">Peer Evaluation</span>
                <div className="navbar-profilePic"></div>
                <span className="navbar-profile">{this.props.username}</span>
            </div>);
    }
}

export default NavBar;