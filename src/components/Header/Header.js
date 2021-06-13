
import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.8rem 2rem;
    height: 100%;

    @media screen and (min-width: 1024px) {
        height: 20rem;
    }
`

export const LeftBox = styled.div`

    display: flex;
    align-items: center;

    svg {
        font-size: 2.2rem;
        fill: var(--clr-header-dark-text);
        margin-right: .6rem;
    }

    p {
        font-size: 1.4rem;
        color: var(--clr-header-dark-text);
    }

`

export const RigthBox = styled.div`
    
    text-align: right;

    .step {
        color: var(--clr-header-text);
        font-size: 1.2rem;
    }

    .info {
        color: var(--clr-header-dark-text);
        font-size: 1.4rem;
    }

`