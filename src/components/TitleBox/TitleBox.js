
import styled from 'styled-components';

export const TitleBox = styled.div`

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 4rem 0;

        @media screen and (min-width: 1024px) {
            padding: 0;
            justify-content: flex-start;
            height: 0;
        }

    &.signup__title-box {
        padding: 2rem 0;
    }
    
    h1, h2 {
        font-size: var(--fs-titles);
        color: var(--primary);
        font-weight: 600;
        margin: 0 auto;
    }

    h2 {
        font-size: 2.2rem;
        text-align: center;
    }

    p, .location__sub-text {
        color: var(--clr-paragraph);
        font-size: var(--fs-sub-titles);
        font-weight: 400;
        width: 36rem;
        padding: 0 2.2rem;

    }

    .location__sub-text, .signup__sub-text {
        font-size: 1.2rem;
    }
    
    
`