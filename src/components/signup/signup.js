import React from 'react';

import './signup.css';

class SignUp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="signup-container">
                    <form>
                        <input name="Name" type="text" value="" />
                    </form>
                </div>);
    }
}

export default SignUp;