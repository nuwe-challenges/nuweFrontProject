
import styled from 'styled-components';

// REACT RESPONSIVE
import { QueryDesktop } from './../utilities/useMediaQuery';

// HISTORY ROUTE
import { useHistory } from 'react-router-dom';

// REACT ICONS----------------------------------
import { ImEye } from 'react-icons/im';
import { ImEyeBlocked } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import { IoIosArrowBack } from 'react-icons/io';

// ELEMENTS COMPONENTS-------------------------
import { TitleBox } from '../components/TitleBox/TitleBox';
import { Sidebar } from '../components/Sidebar/Sidebar';

import { 
    Form, 
    FormBtns 
} from '../components/Form/Form';

import { 
    InputBox, 
    Input 
} from '../components/Input/Input';

import { 
    CheckTextBox, 
    InputCheck 
} from '../components/CheckText/CheckText';

import { 
    BtnBox, 
    Btn 
} from '../components/Btn/Btn';

import {
    Header,
    LeftBox,
    RigthBox 
} from './../components/Header/Header';



const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media screen and (min-width: 1024px) {
        flex: 0 0 50%;
    }


    main {
        max-width: 40rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 8rem 10rem 46rem;
        align-items: center;
        height: 100%;

        @media screen and (min-width: 1024px) {
            grid-template-rows: 20rem 8rem 1fr;
        }
    }

`


// MAIN COMPONENT------------------------------
export const SignupPage = () => {

    let history = useHistory();

    // Ruteo con history
    const goToHome = () => history.push('/');
    const goToLocation = () => history.push('/location');

    return (

        <SignupContainer>

            { QueryDesktop( <Sidebar /> ) }

            <main>

                <Header> 

                    <LeftBox onClick={goToHome}>
                        <IoIosArrowBack />
                        <p>Volver</p>
                    </LeftBox>

                    <RigthBox>
                        <p className="step">PASO 02/03</p>
                        <p className="info">Personal info</p>
                    </RigthBox>

                </Header>

                <TitleBox>
                    <h2>Registra tu cuenta individual</h2>
                    <p className='signup__sub-text'>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
                </TitleBox>

                <Form>

                    <InputBox>
                        <p>Nombre completo *</p>
                        <Input required type="text" />
                    </InputBox>

                    <InputBox>
                        <p>Email *</p>
                        <Input required type="text" />
                    </InputBox>

                    <InputBox>
                        <p>Contraseña *</p>
                        <Input type="password" name="password" required />
                        <ImEyeBlocked />
                    </InputBox>

                    <CheckTextBox>

                        <InputCheck 
                            name='accept' 
                            type='checkbox' 
                        /> 
                        
                        <p>Acepto los términos y condiciones</p>

                    </CheckTextBox>

                    <FormBtns>

                        <BtnBox>

                            <Btn onClick={goToLocation} className='btn'>Registrar cuenta</Btn>

                        </BtnBox>  

                        <p>or</p>

                        <BtnBox>
                            <Btn 
                                className='btn__google'>
                                <FcGoogle />
                                Regístrate con Google
                            </Btn>

                        </BtnBox> 

                    </FormBtns>

                </Form>

            </main>


        </SignupContainer>

    );
};
