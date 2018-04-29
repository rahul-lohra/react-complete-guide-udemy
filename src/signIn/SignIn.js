import React, { Component } from 'react';

export class StupidHeader extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(<div>
            <h3> This is heading with name {this.props.name} </h3>
        </div>)
    }
}

export class SignIn extends React.Component {
render(){
    return(
        <div>
            <form>
                <h2>Please sign in</h2>
                <label>Enter email</label>
                <input placeholder={"Enter email"} id={"email"}/>
                <label>Enter password</label>
                <input placeholder={"Enter password"} id={"password"}/>
                <button> Sign in</button>
            </form>

            <StupidHeader name ="Rahul"/>
            <StupidHeader name ="Princy"/>
        </div>
    )
}
}
export default SignIn;
