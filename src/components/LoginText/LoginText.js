import styled from 'styled-components';


export const LoginTextBox = styled.div`

    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 1024px) {
        position: absolute;
        top: 4rem;
        right: 4rem;
        height: 0;
    }

    p {
        font-size: 1.6rem;
        color: var(--clr-paragraph)
    }

    span {
        color: var(--primary);
    }

`