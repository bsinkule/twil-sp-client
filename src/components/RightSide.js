import React from 'react'
import logo from '../images/long-logo-smart-projects.png'

const RightSide = (props) => {
    return (
        <div className="siteInfo">
            <ul className="listing2">
                <li>
                    <img className="rightLogo" src={logo} alt="logo" />
                    <div>
                        Gives you the power to:<br /><hr />
                        Track and Forecast developer hours as they relate to your current and incoming projects.<br /> <hr />
                        Add, Adjust and Delete project and developer info as needed to ACHIEVE EFFICIENCY!!!<br /><hr />
                        Most Importantly, track incoming project revenue as it compares to developer cost.<br />
                    </div>
                </li>
            </ul> 
        </div>
    )
}

export default RightSide