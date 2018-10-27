import React, {Component} from 'react'

class NotFound extends Component {
    render(){
        return(
            <div>
                Your session timed-out. Please log back in. Thanks.
                <hr/>
                <a href="/">Go Back Login</a>
                <button className="loginButton bg-teal" onClick={this.props.auth.login}>Login</button> 
            </div>
        )
    }
}

export default NotFound