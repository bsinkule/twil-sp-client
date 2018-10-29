import React from 'react'
import AddEngineer from './AddEngineer'
import AddProject from './AddProject'

class Side extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      }

    render() {
        return (
             <div className="side"> 
                <h3 className="center">Add Project</h3>
                <AddProject projApiData={this.props.projApiData}/>
                <h3 className="center">Add Developer</h3>
                <AddEngineer engApiData={this.props.engApiData}/>
            </div>
        )
    }   
}

export default Side