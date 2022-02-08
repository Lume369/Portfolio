import InterestedImage from "../atoms/AboutPage/IntrestedImage";
import IntrestedSection from "../atoms/AboutPage/InterestedSection";
import H3 from '../atoms/H3';
import P from '../atoms/P';
import { myProviderContext } from '../../context/MyProvider';
import { useContext } from "react";
import IntrestedContainer from "../atoms/AboutPage/InterestedContainer";
import InterestedClickHandler from "../molecules/InterestedClickHandler";
import WorkExperience from "../molecules/WorkExperience";
import WorkExpStyled from "../atoms/WorkExperience/WorkExpStyled";
import ProjectsStyled from "../atoms/ProjectsPage/ProjectsStyled";
import Projects from "../molecules/Projects";

const InterestedIn = () => {
    const {showContent, setShowContent, content, setContent} = useContext(myProviderContext);
    
    const toPass = {
        work: "workExp",
        project: "project",
        education: "education"
    }
    

    return (
        <IntrestedContainer>
            <IntrestedSection show={showContent} onClick={() => InterestedClickHandler(showContent, setShowContent, setContent, toPass.work)}>
                <InterestedImage src="https://cdn.pixabay.com/photo/2018/03/25/20/35/skills-3260624_960_720.jpg" alt="" />
                <H3>Work experience</H3>
                <P>get an overview of my backgroung</P>
            </IntrestedSection>

            {showContent && content === toPass.work &&
                <WorkExpStyled>
                    <WorkExperience />
                </WorkExpStyled>
            }

            <IntrestedSection show={showContent} onClick={() => InterestedClickHandler(showContent, setShowContent, setContent, toPass.project)}>
                <InterestedImage src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <H3>Projects</H3>
                <P>take a look at what I'm capable of</P>
            </IntrestedSection>

            {showContent && content === toPass.project &&
                <ProjectsStyled>
                    <Projects />
                </ProjectsStyled>
            }

            <IntrestedSection show={showContent} onClick={() => InterestedClickHandler(showContent, setShowContent, setContent, toPass.education)}>
                <InterestedImage src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <H3>Education</H3>
                <P>the schools I studied at</P>
            </IntrestedSection>
            
        </IntrestedContainer>
    )
}

export default InterestedIn;
