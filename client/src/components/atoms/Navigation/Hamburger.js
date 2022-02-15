import styled from "styled-components";

const Hamburger = styled.div`
    display: block;
    cursor: pointer;
	background-color: lightgray; 
    padding: 15px;
    border-radius: 5px;
    margin-left: 15px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export default Hamburger;
