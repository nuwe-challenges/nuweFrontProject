import styled from 'styled-components';


export const Form = styled.form`
    height: 70% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem 0;

    &.location__form {
        height: 100%;
    }

    &.signup__form {
        height: 30%;
    }

    @media screen and (min-width: 1024px) {
        margin-top: 2rem;
    }
`

export const FormBtns = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
`