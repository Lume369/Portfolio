import { useContext } from "react";
import { context } from "../../context/APIProvider";
import ProjectImagesSection from "../atoms/ProjectsPage/ProjectImagesSection";
import ProjectSection from "../atoms/ProjectsPage/ProjectSection";
import ProjectImage from "../atoms/ProjectsPage/ProjectImage";
import ProjectContainer from "../atoms/ProjectsPage/ProjectContainer";
import LeftArrow from "../organisms/LeftArrow";

const Projects = () => {
    const APIContext = useContext(context)
    const handleDragStart = (e) => e.preventDefault();

    return (
        <>
            {APIContext.projectIsFetched
                ? <ProjectContainer>
                    <LeftArrow />
                    {APIContext.projectData.data.map((element, index) => (
                            <ProjectSection className="single-project-wrapper" key={element.id}>

                                {/* project name */}
                                <h3>
                                    {`${element.project_name}`}
                                </h3>  

                                {/* Images of project */}
                                <ProjectImagesSection className="project-image-section" onDragStart={handleDragStart} >
                                { APIContext.projectImageData.data.filter(item => item.project_name === element.project_name).map((image, index) => (
                                        
                                            <ProjectImage className="project-image" key={index} src={image.image_address} alt="" />
                                        
                                    )) }
                                </ProjectImagesSection>
                                {/* Description of project and tasks */}
                                <p>
                                    {`${element.description}`}
                                </p>

                                {/* Displays the technologies used */}
                                <p>
                                {`${element.technologies}`}
                                </p>
                            </ProjectSection>
                    ))}
                </ProjectContainer>
                : <p>loading...</p>}
        </>
    )
};

export default Projects;
