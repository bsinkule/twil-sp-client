import React from 'react'

const RightSide = (props) => {
    return (
        <div className="siteInfo">
            <ul className="listing2">
                <li>Track and Forecast developer hours as they relate to your current and incoming projects.</li> 
                <li><button className="smallButton" onClick={props.toggle}>Add</button>, Adjust and Delete project and developer info as needed to ACHIEVE EFFICIENCY!!!</li>
                <li>Most Importantly, track incoming project revenue as it compares to developer cost.</li>
            </ul> 
        </div>
    )
}

export default RightSide