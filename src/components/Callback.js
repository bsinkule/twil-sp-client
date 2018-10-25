import React, {Component} from "react";
// import { Link } from '@reach/router'
import Auth from "../Auth";

class Callback extends Component {
    componentDidMount(){
        const auth = new Auth()
        auth.handleAuthentication()

    }
    render(){
        return(
            <div>
                Loading...
                <br/>
                <a href="/">Login Page</a>
            </div>
        )
    }
}

export default Callback
