import { useContext } from "react";
import { context } from "../../context/APIProvider";

// Style
import WorkImg from "../atoms/WorkExperience/WorkImg";
import WorkSection from "../atoms/WorkExperience/WorkSection";
import LeftArrow from "../organisms/LeftArrow";


const WorkExperience = () => {
    const APIContext = useContext(context)

    return (
        <>
            {APIContext.jobIsFetched
                ? <section>
                    <LeftArrow />
                    {APIContext.jobData.data.map((element, index) => (
                            <WorkSection key={element.id}>

                                {/* Job name */}
                                <h3>
                                    {`${element.job_name}`}
                                </h3>  

                                <WorkImg src={element.image} alt=""/>

                                {/* Company */}
                                <p>
                                    {`${element.company}`}
                                </p>

                                {/* Start to end of employment */}
                                <p>
                                    <span>{`${element.start_date.toString().split('T')[0]} - `}</span>
                                    <span>{`${element.end_date.toString().split('T')[0]}`}</span>  
                                </p>

                                {/* Description of job and tasks */}
                                <p>
                                    {`${element.description}`}
                                </p>
                            </WorkSection>
                    ))}
                </section>
                : <p>loading...</p>}
        </>
    );
};

export default WorkExperience;
