import styled from 'styled-components';

const UlNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 768px) {
        position: fixed;
        top: 70px;
        flex-direction: column;
        justify-items: center;
        background-color: #fff;
        width: 100%;
        height: 100vh;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

        left: ${props => props.active ? 0 : '-150%'}
    };
`;

export default UlNav;
