import React from 'react'
import logo from '../images/white-logo-sp.png'

const RightSide = (props) => {
    return (
        <div className="siteInfo">
            <ul className="listing2">
                <li>
                    <img className="rightLogo" src={logo} alt="logo" />
                    <div>
                        <hr/>
                        Track and forecast developer hours as they relate to your current and incoming projects<br /> <hr />
                        Add, adjust and delete project and developer info as needed to ACHIEVE EFFICIENCY!!!<br /><hr />
                        Track incoming project revenue as it compares to developer cost<br /><hr />
                        Send custom SMS messages to clients to give them project status updates<br/>
                    </div>
                </li>
            </ul> 
        </div>
    )
}

export default RightSide