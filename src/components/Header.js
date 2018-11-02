import React, {Component} from 'react'
import logo from '../images/long-logo-smart-projects.png'

class Header extends Component {
    render(){
        return(
        <div className="hero-image-2">
            <div className="hero-text">
                <img className="headerLogo" src={logo}    alt="Smart Projects Logo" />
            </div>
        </div>
        )
    }
}

export default Header