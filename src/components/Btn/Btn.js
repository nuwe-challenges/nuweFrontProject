import styled from 'styled-components';

export const BtnBox = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


    &.location__box {
        height: 20rem;
    }

    &.verify__box {
        height: 20rem;
    }

`
    
export const Btn = styled.button`
    width: 30rem;
    height: 6rem;
    padding: 1.4rem 2rem;
    border-radius: .4rem;
    border: none;
    background-color: var(--primary);
    color: var(--clr-white);


    &.btn, &.btn__google {
        box-shadow: var(--box-shadow);
    }

    &.btn__google {
        background-color: var(--clr-white);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #555;

        svg {
            font-size: 2rem;
            margin-right: 2rem;
        }
    }


`