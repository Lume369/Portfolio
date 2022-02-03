import styled from 'styled-components';

const Nav = styled.nav`
	padding: 20px;
	background-color: lightgray;  
    align-items: center;
	justify-content: flex-start;

	@media only screen and (max-width: 768px) {
		display: flex;
		position: fixed;
	}
`;

export default Nav;