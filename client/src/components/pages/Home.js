import textData from "../../data/textData";
import HomeImage from "../atoms/HomePage/HomeImage";
import HomeHeader from "../atoms/HomePage/HomeHeader";
import HomeSection from "../molecules/HomeSection";
import { Link } from "react-router-dom";

const Home = (props) => {

	

	return (
		<main>
			<HomeHeader>
				<HomeImage src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' alt='' />
			</HomeHeader>
			

			<HomeSection
				title={textData.aboutSection1.title}
				text={textData.aboutSection1.text}
			/>

			<Link to="/about" ><button>Got me!</button></Link>

		
		</main>
	)
};

export default Home;