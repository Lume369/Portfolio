import H3 from "../atoms/H3";
import HomeContainerSection from "../atoms/HomePage/HomeContainerSection";
import P from "../atoms/P";

const HomeSection = (props) => {
	return (
		<HomeContainerSection>
			<H3>{props.title}</H3>
			<P>{props.text}</P>
		</HomeContainerSection>
	)
};

export default HomeSection;