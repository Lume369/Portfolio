import styled from "styled-components";

const WorkExpStyled = styled.section`
    display: flex;
    margin: 10px;
    top: 0;

    text-align: center;

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

`;

export default WorkExpStyled;