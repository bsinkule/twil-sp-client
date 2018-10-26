import React from 'react'
import { Link } from "@reach/router"

const Nav = (props) => {
  
    return (
        <div className="nav">
            <div className="nav-head">
                <div className="nav-title">smart projects</div>
            </div>
            <input type="checkbox" id="nav-check"/>
            <div className="nav-links">
                <Link to='developers'><p className="line">developers</p></Link>
                <Link to='projects'><p className="line">projects</p></Link>
                <p className="line" onClick={props.auth.logout}>logout</p>
            </div>
        </div>
    )
}

export default Nav