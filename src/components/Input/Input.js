import styled from 'styled-components';


export const InputBox = styled.div`

    position: relative;

    p {
        color: var(--clr-label-input);
    }

    span {
        color: red;
    }

    svg {
        font-size: 1.8rem;
        position: absolute;
        top: 50%;
        right: 6%;
        fill: var(--primary);
    }

    .input__phone {
        padding: 1.2rem 3rem;
        margin: 1rem 0;
        border-radius: .4rem;
        border: 1px solid rgba(3, 3, 3, .1);
        box-shadow: var(--box-shadow);
        width: 30rem;
        outline: none;

        & > * {
            border: none;
            outline: none;
        }
    }

`

export const Input = styled.input`

    padding: 1.2rem 3rem;
    margin: 1rem 0;
    border-radius: .4rem;
    border: 1px solid rgba(3, 3, 3, .1);
    box-shadow: var(--box-shadow);
    width: 30rem;
    outline: none;

    &:focus {
        border: 1px solid var(--primary);
        box-shadow: var(--box-shadow-input);
    }
`