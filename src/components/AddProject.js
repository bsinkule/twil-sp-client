import React from 'react'

// const projApi = "http://localhost:5000/projects/"
const projApi = "https://express-smart-projects.herokuapp.com/projects/"

class AddProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: '',
            client: '',
            logoClient: '',
            revenue: '',
            frontendHours: '',
            backendHours: '',
            startDate: '',
            endDate: '',
            auth_id: localStorage.getItem('User_id')
        }
    }

    postData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)
        const options = {
            method: 'POST',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(projApi, options)
            .then(res => res.json())
            .then(() => {
                this.props.projApiData()
        })

        this.setState({
            projectName: '',
            client: '',
            logoClient: '',
            revenue: '',
            frontendHours: '',
            backendHours: '',
            startDate: '',
            endDate: '',
        })
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    render() {

        return (
            <div>
                <form className="sideForm" onSubmit={this.postData}> 
                        <div className="divSideForm">
                            <label>Project Name:<br />
                                <input autoFocus placeholder="ex. Sandwich Website" className="inputAdd" type="text" name="projectName" value={this.state.projectName} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Client:<br />
                                <input placeholder="ex. Jersey Mike's" className="inputAdd" type="text" name="client" value={this.state.client} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Client Logo:<br />
                                <input placeholder="image url" className="inputAdd" type="text" name="logoClient" value={this.state.logoClient} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Project Revenue:<br />
                                <input placeholder="ex. 8000" className="inputAdd" type="number" step="0.01" name="revenue" value={this.state.revenue} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Estimated Frontend Hours:<br />
                                <input placeholder="ex. 250" className="inputAdd" type="number" step="0.01" name="frontendHours" value={this.state.frontendHours} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm"> 
                            <label>Estimated Backend Hours:<br />
                                <input placeholder="ex. 285" className="inputAdd" type="number" step="0.01" name="backendHours" value={this.state.backendHours} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>
                                Select Start Date:<br />
                                <select required name="startDate" value={this.state.startDate} onChange={this.handleChange}>
                                    <option></option>
                                    <option value="11-19-18">11-19-18</option>
                                    <option value="12-3-18">12-3-18</option>
                                    <option value="12-17-18">12-17-18</option>
                                    <option value="12-31-18">12-31-18</option>
                                    <option value="1-14-19">1-14-19</option>
                                    <option value="1-28-19">1-28-19</option>
                                    <option value="2-4-19">2-4-19</option>
                                    <option value="2-18-19">2-18-19</option>
                                    <option value="3-4-19">3-4-19</option>
                                    <option value="3-18-19">3-18-19</option>
                                    <option value="4-1-19">4-1-19</option>
                                    <option value="4-15-19">4-15-19</option>
                                </select>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>
                                Select End Date:<br />
                                <select required name="endDate" value={this.state.endDate} onChange={this.handleChange}>
                                    <option></option>
                                    <option value="11-19-18">11-19-18</option>
                                    <option value="12-3-18">12-3-18</option>
                                    <option value="12-17-18">12-17-18</option>
                                    <option value="12-31-18">12-31-18</option>
                                    <option value="1-14-19">1-14-19</option>
                                    <option value="1-28-19">1-28-19</option>
                                    <option value="2-4-19">2-4-19</option>
                                    <option value="2-18-19">2-18-19</option>
                                    <option value="3-4-19">3-4-19</option>
                                    <option value="3-18-19">3-18-19</option>
                                    <option value="4-1-19">4-1-19</option>
                                    <option value="4-15-19">4-15-19</option>
                                </select>
                            </label>
                        </div>
                        <div className="hide divSideForm">
                            <label>Auth ID:<br />
                                <input className="inputAdd" type="text" name="auth_id" value={this.state.auth_id} onChange={this.handleChange} required />
                            </label>
                        </div>
                    <button className="addButton" type="submit">Add Project</button>
                </form>
            </div>
        )
    }
}

export default AddProject