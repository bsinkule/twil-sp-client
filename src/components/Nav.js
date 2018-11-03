import React from 'react'
import { Link } from "@reach/router"
import logo from '../images/white-logo-sp.png'

const Nav = (props) => {
  
    return (
        <div className="nav">
            <div className="nav-head">
            <Link to='main'><img className="logo" src={logo} alt="logo"/></Link>
            </div>
            <input type="checkbox" id="nav-check"/>
            <div className="nav-links">
                <Link to='developers'><p className="line">developers</p></Link>
                <Link to='projects'><p className="line">projects</p></Link>
                <Link to='main'><p className="line">home</p></Link>
                <p className="line" onClick={props.auth.logout}>logout</p>
            </div>
        </div>
    )
}

export default Nav