import React, {Component} from 'react'

class NotFound extends Component {
    render(){
        return(
        <div className="hero-image">
            <div className="hero-text-3">
                <div>Your session timed-out. Please log back in. Thanks.</div><br/><br/>
                <button className="loginButton" onClick={this.props.auth.login}>Click To Log Back In</button>
            </div>
        </div>
        )
    }
}

export default NotFound