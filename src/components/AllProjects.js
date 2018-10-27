import React from 'react'
import ProjectLi from './ProjectLi'

const AllProjects = (props) => {

    const projects = props.projData.map(pro => {
       return <ProjectLi    id={pro.id}
                            projectName={pro.projectName}
                            client={pro.client}
                            logoClient={pro.logoClient}
                            revenue={pro.revenue}
                            startDate={pro.startDate}
                            endDate={pro.endDate}
                            backendHours={pro.backendHours}
                            frontendHours={pro.frontendHours}
                            projApiData={props.projApiData}
                            deleteProject={props.deleteProject}
                            />
    })

    return (
        <ul className="listing">
            {projects}
        </ul>
    )
}

export default AllProjects