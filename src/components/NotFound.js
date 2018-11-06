import React, {Component} from 'react'
import logo from '../images/white-logo-sp.png'

class NotFound extends Component {
    render(){
        return(
        <div className="hero-image">
            <div className="hero-text">
                <img className="headerLogo" src={logo} alt="Smart Projects Logo" />
                <div>Your session timed-out. Please log back in. Thanks.</div><br/>
                <button className="loginButton" onClick={this.props.auth.login}>Click To Log Back In</button>
            </div>
        </div>
        )
    }
}

export default NotFound