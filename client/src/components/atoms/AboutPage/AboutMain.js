import styled from "styled-components";

const AboutMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;

    @media screen and (max-width: 768px) {
        margin-top: -100px;
    };
`;

export default AboutMain;
