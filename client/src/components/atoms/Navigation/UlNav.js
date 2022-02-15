import styled from 'styled-components';

const UlNav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100vw;

    font-size: larger;

    @media only screen and (max-width: 768px) {
        position: fixed;
        margin-top: 20px;
        top: 70px;
        flex-direction: column;
        background-color: #fff;
        height: 100vh;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        background-color: lightgray;

        left: ${props => props.active ? 0 : '-150%'};
    };
`;

export default UlNav;
