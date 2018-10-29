import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
    toggle =() => {
        this.setState({
            visible : !this.state.visible
        })
    }

    render(){
        return (
            <div className="hero-image">
                <div className="hero-text">
                    {!this.props.auth.isAuthenticated() ? <button className="loginButton" onClick={this.props.auth.login}>Login / Signup</button> : <button className="loginButton"><a href="/main">Enter</a></button>}
                    <button className="loginButton" onClick={this.props.auth.logout}>Log out</button>
                </div>
            </div>
            )
    }
}

export default Login;
