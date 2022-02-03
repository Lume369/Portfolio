import {useContext} from 'react';
import {nanoid} from "nanoid";
import {context} from "../../context/APIProvider";
import H2 from "../atoms/H2";
import logger from "../../utils/logger";
import HomeImage from '../atoms/HomePage/HomeImage';
import AboutHeader from '../atoms/AboutPage/AboutHeader';
import AboutMain from '../atoms/AboutPage/AboutMain';
import RoundProfileImage from '../atoms/AboutPage/RoundProfileImage';
import ProfileName from '../atoms/AboutPage/ProfileName';


const About = () => {

	const APIContext = useContext(context);

	return (
		<AboutMain>
			<AboutHeader>
				<H2>About</H2>
				<p>my story</p>
			</AboutHeader>

			<HomeImage src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80" alt=""/>
			
			<RoundProfileImage src="https://drive.google.com/uc?export=view&id=1GX3ooLr0sdBDojVl-RaSEEIwQt6DsUYm" alt="A picture of myself"/>
			<ProfileName>Joshua Meyers</ProfileName>
			<p>Globetrotter</p>


			<h2>What part are you interested in?</h2>




			<p>The following button logs "Hello world!" to the console thanks to a function provided by
				/utils/logger.js</p>
			<button
				onClick={() => logger("Hello world!")}
			>
				Log
			</button>
			{APIContext.usersIsFetched
				? <ol>
					{APIContext.usersData.data.map((element) => (
						<li key={nanoid()}>
							<span>
								{`Job title: ${element.job_name} - `}
							</span>
							<span>
								{`Day started: ${element.start_date}`}
							</span>
						</li>
					))}
				</ol>
				: <p>loading...</p>}
		</AboutMain>

	)
};

export default About;