import { useContext } from "react";
import { context } from "../../context/APIProvider";
import { myProviderContext } from "../../context/MyProvider";
import ProjectSection from "../atoms/ProjectsPage/ProjectSection";

const Projects = () => {
    const APIContext = useContext(context)
    const {setShowContent} = useContext(myProviderContext);

    return (
        <>
            {APIContext.projectIsFetched
                ? <section>
                    <button type="button" className="btn-close" aria-label="Close" width='60px' onClick={() => setShowContent(false)} >X</button>
                    {APIContext.projectData.data.map((element, index) => (
                            <ProjectSection key={`${index}369`}>

                                {/* project name */}
                                <h3>
                                    {`${element.project_name}`}
                                </h3>  

                                {/* Images of project */}
                                

                                {/* Description of project and tasks */}
                                <p>
                                    {`${element.description}`}
                                </p>

                                {/* Displays the technologies used */}
                                <p>
                                {`${element.link}`}
                                </p>
                            </ProjectSection>
                    ))}
                </section>
                : <p>loading...</p>}
        </>
    )
};

export default Projects;
