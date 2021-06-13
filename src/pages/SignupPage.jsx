
import styled from 'styled-components';

import { useState } from 'react';

// REACT RESPONSIVE
import { QueryDesktop } from './../utilities/useMediaQuery';

import validator from 'validator';

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
        height: 100%;
        max-width: 40rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 8rem 10rem 46rem;
        align-items: center;
    }

`


// MAIN COMPONENT------------------------------
export const SignupPage = () => {

    let history = useHistory();

    // Estados
    
    const [showPass, setShowPass] = useState(true);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const [user, setUser] = useState({

        fullName: '',
        mail: '',
        pass: ''

    });

    // Ruteo con history
    const goToHome = () => history.push('/');
    // const goToLocation = () => history.push('/location');

    // Operations
    const handleShowPass = () => setShowPass(!showPass);
    const handleFullName = (e) => setUser({ ...user, fullName: e.target.value} );

    const handleMail = (e) => {
        validator.isEmail('testing@io.com');
        setUser({ ...user, mail: e.target.value} );
    };

    const handlePass = (e) => setUser({ ...user, pass: e.target.value} );
     

    const handleCheckTerms = () => setAcceptTerms(true);

    const handleForm = (e) => {
        e.preventDefault();

        if(acceptTerms) {
            localStorage.setItem('User', JSON.stringify(user));
            history.push('/location');
        }

    };


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

                <TitleBox className='signup__title-box'>
                    <h2>Registra tu cuenta individual</h2>
                    <p className='signup__sub-text'>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
                </TitleBox>

                <Form onSubmit={handleForm} className='signup__form'>

                    <InputBox>
                        <p>Nombre completo *</p>
                        <Input onChange={handleFullName} required type="text" />
                    </InputBox>

                    <InputBox>
                        <p>Email *</p>
                        <Input onChange={handleMail} required type="mail" />
                    </InputBox>

                    <InputBox>
                        <p>Contraseña *</p>
                        { showPass ? <Input onChange={handlePass} type='password' />  :  <Input onChange={handlePass} typer='text' /> }
                        { showPass ? <ImEye onClick={handleShowPass} />  :  <ImEyeBlocked onClick={handleShowPass} /> }
                    </InputBox>

                    <CheckTextBox>

                        <InputCheck
                            onClick={handleCheckTerms}
                            type='checkbox' 
                        /> 
                        
                        <p>Acepto los términos y condiciones</p>

                    </CheckTextBox>

                    <FormBtns>

                        <BtnBox>

                            <Btn type='submit' className='btn'>Registrar cuenta</Btn>

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
