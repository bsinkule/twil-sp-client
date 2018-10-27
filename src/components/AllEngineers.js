import React from 'react'
import EngineerLi from './EngineerLi'

const AllEngineers = (props) => {

    const engineers = props.engData.map(dev => {
       return <EngineerLi    id={dev.id}
                            name={dev.name}
                            imgUrl={dev.imgUrl}
                            title={dev.title}
                            department={dev.department}
                            startDate={dev.startDate}
                            endDate={dev.endDate}
                            hourlyWage={dev.hourlyWage}
                            hoursPerWeek={dev.hoursPerWeek}
                            engApiData={props.engApiData}
                            deleteEngineer={props.deleteEngineer}
                            />
    })

    return (
        <ul className="listing">
            {engineers}
        </ul>
    )
}

export default AllEngineers