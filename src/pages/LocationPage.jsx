

import styled from 'styled-components';


import { useContext, useState } from 'react';

// REACT RESPONSIVE
import { QueryDesktop } from './../utilities/useMediaQuery';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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


// Context para user
import UserContext from '../context/UserContext';


// MAIN COMPONENT
const LocationContainer = styled.div`

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

// MAIN COMPONENT------------------------
export const LocationPage = () => {

    const {user, setUser} = useContext(UserContext);

    // Ruteo con history
    let history = useHistory();

    // Estados
    const [phone, setPhone] = useState('');

    // HandleClicks
    const goToSignup = () => history.push('/signup');
    const goToVerify = () => history.push('/verify');


    const handleAdress = (e) => setUser({...user, adress: e.target.value});
    const handleCountry = (e) => setUser({...user, country: e.target.value});
    const handleForm = (e) => {
        e.preventDefault();

        let user = JSON.parse(localStorage.getItem('User') );

        localStorage.setItem('User', JSON.stringify(user) );
        history.push('/verify');

    };

    return (

        <LocationContainer>

            { QueryDesktop( <Sidebar /> ) }
            
            <main>

                <Header> 

                    <LeftBox onClick={goToSignup}>
                        <IoIosArrowBack />
                        <p>Volver</p>
                    </LeftBox>

                    <RigthBox>
                        <p className="step">PASO 02/03</p>
                        <p className="info">Personal info</p>
                    </RigthBox>

                </Header>

                <TitleBox className='location__title-box'>
                    <h1>¡Completa tu perfil!</h1>
                    <p className='location__sub-text'>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
                </TitleBox>

                <Form onSubmit={handleForm} className='location__form'>

                    <InputBox>
                        <p>Número de teléfono</p>
                        <PhoneInput
                            type='tel'
                            className='input__phone'
                            countryCallingCodeEditable={false}
                            initialValueFormat="national"
                            international
                            defaultCountry="ES"
                            value={phone}
                            onChange={setPhone}
                        />
                    </InputBox>

                    <InputBox>
                        <p>Dirección</p>
                        <Input onChange={handleAdress} type="text" />
                    </InputBox>

                    <InputBox>
                        <p>País de residencia</p>
                        <Input onChange={handleCountry}/>
                        

                    </InputBox>
                    
                    <BtnBox className='location__box' >

                        <Btn onClick={goToVerify}>GUARDAR Y CONTINUAR</Btn>

                        <SafeBox>
                            <AiFillSafetyCertificate />
                            <p>Your info is safely secured</p>
                        </SafeBox>

                    </BtnBox>

                </Form>

            </main>

        </LocationContainer>

    );

};
