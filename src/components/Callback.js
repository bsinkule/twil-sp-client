import React, {Component} from "react";
import Auth from "../Auth";

class Callback extends Component {
    componentDidMount(){
        const auth = new Auth()
        auth.handleAuthentication()

    }
    render(){
        return(
            <div className="hero-image">
                <div className="hero-text">
                    <h1>LOADING...</h1>
                    <a href="/"><button className="loginButton">Back to Login Page</button></a>
                </div>
            </div>
        )
    }
}

export default Callback
