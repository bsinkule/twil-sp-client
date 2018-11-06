import React, {Component} from "react";
import Auth from "../Auth";
import logo from '../images/white-logo-sp.png'

class Callback extends Component {
    componentDidMount(){
        const auth = new Auth()
        auth.handleAuthentication()

    }
    render(){
        return(
            <div className="hero-image">
                <div className="hero-text">
                <img className="headerLogo" src={logo} alt="Smart Projects Logo"/>
                    <h1>LOADING...</h1>
                    <a href="/"><button className="loginButton">Back to Login Page</button></a>
                </div>
            </div>
        )
    }
}

export default Callback
