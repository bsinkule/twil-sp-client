import React, { Component } from 'react'
import '../App.css';
import { Router, Link } from '@reach/router'
import Nav from './Nav'
// import Header from './Header'
import Side from './Side'
import RightSide from './RightSide'
import HoursChart from './HoursChart'

const engApi = "http://localhost:5000/engineers/"
const projApi = "http://localhost:5000/projects/"

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
            </Router>
            {this.state.side ? null : <RightSide toggle={this.toggle}/>}
        </div>
      </div>
    )
  }
}

export default Main;
