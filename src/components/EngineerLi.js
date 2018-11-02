import React from 'react'
import UpdateEngineer from './UpdateEngineer'

class EngineerLi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authForm: false
        }
    }

    showUpdateForm = () => {
        const tog = !this.state.authForm
        this.setState({
            authForm: tog
        })
    }

    render() {
        return (
            <li >
                <img className="resp" src={this.props.imgUrl} alt="Developer"/>
                <h3>{this.props.name}</h3>
                <div className="body">
                    <div><b>Title:</b> {this.props.title}</div>
                    <div><b>Division:</b> {this.props.department}</div>
                    <div><b>Period Start Date:</b> {this.props.startDate}</div>
                    <div><b>Period End Date:</b> {this.props.endDate}</div>
                    <div><b>Work Hours Per Week:</b> {this.props.hoursPerWeek}</div>
                    <div><b>Hourly Wage:</b> ${this.props.hourlyWage} per hour</div>
                </div>
                <div className="cta">
                    <button className="addRemoveButton2" onClick={this.showUpdateForm}>{this.state.authForm ? 'Close Update Dev Form' : 'Show Update Dev Form'}</button>
                    <button className="addRemoveButton2" onClick={() => this.props.deleteEngineer(this.props.id)}>Delete Developer</button>
                </div>
                {this.state.authForm ? <UpdateEngineer engApiData={this.props.engApiData} name={this.props.name} title={this.props.title} department={this.props.department} startDate={this.props.startDate} endDate={this.props.endDate} hoursPerWeek={this.props.hoursPerWeek} hourlyWage={this.props.hourlyWage} id={this.props.id} imgUrl={this.props.imgUrl} /> : null}    
            </li>
        )
    }
}

export default EngineerLi

