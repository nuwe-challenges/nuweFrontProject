

import styled from 'styled-components';

// REACT RESPONSIVE
import { QueryDesktop } from './../utilities/useMediaQuery';

// HISTORY ROUTE
import { useHistory } from 'react-router-dom';


import { AiOutlineCode } from 'react-icons/ai';
import { VscOrganization } from 'react-icons/vsc';

// ELEMENTS COMPONENTS
import { TitleBox } from '../components/TitleBox/TitleBox';
import { LoginText  } from '../components/LoginText/LoginText';
import { Sidebar  } from '../components/Sidebar/Sidebar';

import { 

    UserBox,
    User,
    UserText

} from '../components/UserBox/UserBox';




// CONTAINER STYLES
const HomeContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    main {
        max-width: 40rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 30rem 1fr;
        align-items: center;
        height: 100%;

    }

    @media screen and (min-width: 1024px) {
        flex: 0 0 50%;
    }

`
// MAIN COMPONENT
export const HomePage = () => {

    // Ruteo con history
    let history = useHistory();

    

    // HandleClicks
    const goToSignup = () => history.push('/signup');
    const goToLogin = () => history.push('/login');


    return (

        <HomeContainer>
            
            { QueryDesktop(<Sidebar />) }

            <main>

                <TitleBox>
                    <h1>¡Únete a la comunidad!</h1>
                    <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
                </TitleBox>


                <UserBox>

                    <User onClick={goToSignup}>
                        
                        <AiOutlineCode />

                        <UserText>
                            <h4>Developers</h4>
                            <p>Eres una persona que quiere entrar en el mundo DEV</p>
                        </UserText>

                    </User>

                    <User>
                        
                        <VscOrganization />

                        <UserText>
                            <h4>Business</h4>
                            <p>Tienes o perteneces a una compañía</p>
                        </UserText>

                    </User>

                </UserBox>
                

                <LoginText>
                    <p>¿Ya tienes cuenta? <span onClick={goToLogin}> Inicia sesión </span></p>
                </LoginText> 

            </main>

        </HomeContainer>
        
        

    );

};
        

