import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;

	width: 100vw;
	padding: 20px;
	overflow: hidden;


	@media only screen and (min-width: 768px) {
		position: static;
		align-items: center;
		justify-content: space-around; 
		background-color: lightgray;
	};
`;

export default Nav;