import H2 from "../atoms/H2";
import AboutImage from '../atoms/AboutPage/AboutImage';
import AboutHeader from '../atoms/AboutPage/AboutHeader';
import AboutMain from '../atoms/AboutPage/AboutMain';
import RoundProfileImage from '../atoms/AboutPage/RoundProfileImage';
import ProfileName from '../atoms/AboutPage/ProfileName';
import InterestedIn from '../organisms/InterestedIn'


const About = () => {

	return (
		<AboutMain>
			<AboutHeader>
				<H2>About</H2>
				<p>my story</p>
			</AboutHeader>

			<AboutImage src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80" alt=""/>
			
			<RoundProfileImage src="https://drive.google.com/uc?export=view&id=1GX3ooLr0sdBDojVl-RaSEEIwQt6DsUYm" alt="A picture of myself"/>
			
			<ProfileName>Joshua Meyers</ProfileName>
			<p>Globetrotter</p>


			<h2>What part are you interested in?</h2>

			<InterestedIn />
		</AboutMain>

	)
};

export default About;