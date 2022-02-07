import styled from "styled-components";

const IntrestedSection = styled.section`
    display: ${props => props.show ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;

    margin: 0 15px;
    text-align: left;

    cursor: pointer;
`;

export default IntrestedSection;
