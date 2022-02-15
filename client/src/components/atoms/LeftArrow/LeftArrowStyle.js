import styled from "styled-components";

const LeftArrowStyle = styled.div`
    position: absolute;
    top: 25px;
    width: 90%;
    height: 10px;
    background-color: #808080;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
    animation: arrow 700ms linear infinite;

    &::after, &::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 10px;
        right: -8px;
        background-color: #808080;
    };

    &::after {
        top: -12px;
        transform: rotate(45deg);
    };

    &::before {
        top: 12px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        transform: rotate(-45deg);
    };
`;

export default LeftArrowStyle;