import React, { Component } from 'react'
import '../App.css';
import { Router, Link } from '@reach/router'
import Nav from './Nav'
import Side from './Side'
import RightSide from './RightSide'
import HoursChart from './HoursChart'
import AllEngineers from './AllEngineers'
import AllProjects from './AllProjects'

// const engApi = "http://localhost:5000/engineers/"
// const projApi = "http://localhost:5000/projects/"
const engApi = "https://express-smart-projects.herokuapp.com/engineers/"
const projApi = "https://express-smart-projects.herokuapp.com/projects/"

class Main extends Component {
  state = {
    projData: [],
    engData: [],
    side: false
  }

  componentDidMount() {
    this.projApiData()
    this.engApiData()
  }

  projApiData = () => {
    fetch(projApi)
      .then(response => response.json())
      .then(data => {
        this.setState({
          projData: data.data.filter(auth => {
              return auth.auth_id === localStorage.getItem('User_id')
          })
        })
      })
  }

  engApiData = () => {
    fetch(engApi)
      .then(response => response.json())
      .then(data => {
        this.setState({
          engData: data.data.filter(auth => {
            return auth.auth_id === localStorage.getItem('User_id')
        })
      })
    })
  }

  toggle = () => {
      const tog = !this.state.side
      this.setState({
          side: tog
      })
  }

  deleteEngineer = (id) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({
          'content-type': 'application/json'
      })
    }

    fetch(engApi + id, options)
        .then(res => {
            return res.json()
        })
        .then(() => {
            const oldData = this.state.engData
            const newData = oldData.filter(item => {
              return !(id === item.id)
            })
            this.setState({
              engData: newData
            })
        })
        .then(() => {
          this.engApiData()
      })
  }

  deleteProject = (id) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({
          'content-type': 'application/json'
      })
    }

    fetch(projApi + id, options)
        .then(res => {
            return res.json()
        })
        .then(() => {
            const oldData = this.state.projData
            const newData = oldData.filter(item => {
              return !(id === item.id)
            })
            this.setState({
              projData: newData
            })
        })
        .then(() => {
          this.projApiData()
      })
  }


  render() {
    console.log("Projects - ", this.state.projData)
    console.log("Engineers - ", this.state.engData)

    return (
      <div className="Ap">
        <Nav auth={this.props.auth}/>
        <div className="main">
            {this.state.side ? <Side projApiData={this.projApiData} engApiData={this.engApiData}/> : null}
            <div className="tab" onClick={this.toggle}>{this.state.side ? <p>hide</p> : <p>add info</p>}</div>
            <Router>
                <HoursChart path='main' projData={this.state.projData} engData={this.state.engData}/>
                <AllEngineers path='developers' deleteEngineer={this.deleteEngineer} engApiData={this.engApiData} engData={this.state.engData}/>
                <AllProjects path='projects' deleteProject={this.deleteProject} projApiData={this.projApiData} projData={this.state.projData}/>
            </Router>
            {this.state.side ? null : <RightSide />}
        </div>
      </div>
    )
  }
}

export default Main;
