import styled from "styled-components";

const Hamburger = styled.div`
    display: none;

    @media only screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`;

export default Hamburger;
