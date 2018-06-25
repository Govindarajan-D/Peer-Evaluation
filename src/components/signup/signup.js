import React from 'react';

import './signup.css';

class SignUp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="signup-container">
                    <form>
                        <span>Name</span><input name="Name" type="text" value="" /><br/>
                        <span>User Name</span><input name="User Name" type="text" value="" />
                    </form>
                </div>);
    }
}

export default SignUp;