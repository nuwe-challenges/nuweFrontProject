import styled from 'styled-components';

export const UserBox = styled.div`
    height: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const User = styled.div`

    display: flex;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    padding: 2rem 1rem;
    border: 1px solid none;
    border-radius: 1rem;
    box-shadow: var(--box-shadow);

    svg {
        font-size: 6rem;
        fill: var(--clr-icons);
        flex: 0 0 30%;
    }

`
    

export const UserText = styled.div`

    h4 {
        font-size: var(--fs-dev-title);
        font-weight: 400;
    }

    p {
        font-size: var(--fs-dev-sub-title);
        color: var(--clr-paragraph);
    }

`