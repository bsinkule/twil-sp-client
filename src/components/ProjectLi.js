import React from 'react'
import UpdateProject from './UpdateProject'
import SMSForm from './SMSForm'

class ProjectLi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authForm: false,
            smsShow: false
        }
    }

    showUpdateForm = () => {
        const tog = !this.state.authForm
        this.setState({
            authForm: tog,
            smsShow: false
        })
    }
    showSMSForm = () => {
        const tog = !this.state.smsShow
        this.setState({
            smsShow: tog,
            authForm: false
        })
    }

    render() {
        return (
            <li>
                <img className="resp" src={this.props.logoClient} alt="Client Logo"/>
                <h3>{this.props.projectName}</h3>
                <div className="body">
                    <div><b>Client:</b> {this.props.client}</div>
                    <div><b>Project Revenue:</b> ${this.props.revenue}</div>
                    <div><b>Start Date:</b> {this.props.startDate}</div>
                    <div><b>Target End Date:</b> {this.props.endDate}</div>
                    <div><b>Estimated FE Hours:</b> {this.props.frontendHours} hrs</div>
                    <div><b>Estimated BE Hours:</b> {this.props.backendHours} hrs</div>
                    <div className="smsButtonExplain">Click the 'Show SMS Form' button to write and send a custom SMS to the client about their project status</div>
                </div>
                <div className="cta">
                    <button className="addRemoveButton2" onClick={this.showUpdateForm}>{this.state.authForm ? 'Close Update Project Form' : 'Show Update Project Form'}</button>
                    <button className="addButton2" onClick={this.showSMSForm}>{this.state.smsShow ? 'Close SMS Form' : 'Show SMS Form'}</button>
                    <button className="addRemoveButton2" onClick={() => this.props.deleteProject(this.props.id)}>Delete Project</button>
                </div>
                {this.state.smsShow ? <SMSForm mobileNumber={this.props.mobileNumber} /> : null}
                {this.state.authForm ? <UpdateProject mobileNumber={this.props.mobileNumber} projApiData={this.props.projApiData} projectName={this.props.projectName} client={this.props.client} logoClient={this.props.logoClient} startDate={this.props.startDate} endDate={this.props.endDate} frontendHours={this.props.frontendHours} backendHours={this.props.backendHours} id={this.props.id} revenue={this.props.revenue} /> : null}    
            </li>
        )
    }
}

export default ProjectLi

