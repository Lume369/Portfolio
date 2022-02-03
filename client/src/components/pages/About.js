import {useContext} from 'react';
import {nanoid} from "nanoid";
import {context} from "../../context/APIProvider";
import {context as myProviderContext} from "../../context/MyProvider";
import H2 from "../atoms/H2";
import P from "../atoms/P";
import logger from "../../utils/logger";


const About = () => {

	const APIContext = useContext(context);
	const myContext = useContext(myProviderContext);

	return (
		<main>
			<H2>About</H2>
			<p>The following count comes from a state kept in a general purpose context.</p>
			<P>{`Count: ${myContext.count}`}</P>
			<button
				onClick={() => {
					myContext.setCount(prevState => prevState + 1);
				}}
			>
				+1
			</button>
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
									{`NAME: ${element.job_name} - `}
								</span>
							<span>
									{`EMAIL: ${element.start_date}`}
								</span>
						</li>
					))}
				</ol>
				: <p>loading...</p>}
		</main>

	)
};

export default About;