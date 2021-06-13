
import styled from "styled-components";

// REACT RESPONSIVE
import { QueryDesktop } from './../utilities/useMediaQuery';

// HISTORY ROUTE
import { useHistory } from 'react-router-dom';

// EEMENTS COMPONENTS------------------------
import { Header, LeftBox, RigthBox } from './../components/Header/Header';
import { TitleBox } from '../components/TitleBox/TitleBox';
import { Input, InputBox } from '../components/Input/Input';
import { Btn, BtnBox } from '../components/Btn/Btn';
import { SafeBox } from '../components/SafeBox/SafeBox';
import { Form } from '../components/Form/Form';
import { Sidebar } from '../components/Sidebar/Sidebar';

// REACT ICONS------------------------
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { RiCheckboxCircleFill } from 'react-icons/ri';


const VerifyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    main {
        height: 100vh;
        max-width: 40rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 8rem 10rem 46rem;

        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        flex: 0 0 50%;
    }
`



export const VerifyPage = () => {

    // Ruteo con history
    let history = useHistory();

    // HandleClicks
    const goToLocation = () => history.push('/location');
    const goToLogin = () => history.push('/login');

    return (

        <VerifyContainer>

            { QueryDesktop( <Sidebar /> ) }

            <main>

                <Header> 

                    <LeftBox onClick={goToLocation}>
                        <IoIosArrowBack />
                        <p>Volver</p>
                    </LeftBox>

                    <RigthBox>
                        <p className="step">PASO 02/03</p>
                        <p className="info">Personal info</p>
                    </RigthBox>

                </Header> 

                <TitleBox className='verify__title-box'>
                    <h1>Verifica tu perfil</h1>
                    <p className='location__sub-text'>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
                </TitleBox>

                <Form>

                    <InputBox>
                        <p>NÚMERO DE TARJETA</p>
                        <Input type="text" />
                        <RiCheckboxCircleLine />
                    </InputBox>

                    <InputBox>
                        <p>CÓDIGO SECRETO</p>
                        <Input type="text" />
                        <RiCheckboxCircleLine />
                    </InputBox>

                    <BtnBox className='verify__box'>

                        <Btn onClick={goToLogin}>GUARDAR Y CONTINUAR</Btn>

                        <SafeBox>
                            <AiFillSafetyCertificate />
                            <p>Your info is safely secured</p>
                        </SafeBox>

                    </BtnBox>

                </Form>

            </main>

        </VerifyContainer>

    );

};
