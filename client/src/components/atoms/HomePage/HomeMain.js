import styled from "styled-components";

const HomeMain = styled.main`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        font-size: larger;
        text-align: center;
        max-width: 765px;
        justify-content: center;
    };
`;

export default HomeMain;