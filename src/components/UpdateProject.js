import React from 'react'

const projApi = "http://localhost:5000/projects/"

class UpdateProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: this.props.projectName,
            client: this.props.client,
            logoClient: this.props.logoClient,
            revenue: this.props.revenue,
            frontendHours: this.props.frontendHours,
            backendHours: this.props.backendHours,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
        }
    }

    putData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)
        const options = {
            method: 'PUT',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(projApi + this.props.id, options)
            .then(res => res.json())
            .then(() => {
                this.props.projApiData()
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
                <form className="sideForm" onSubmit={this.putData}> 
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
                    <button className="addButton" type="submit">Update Project</button>
                </form>
            </div>
        )
    }
}

export default UpdateProject