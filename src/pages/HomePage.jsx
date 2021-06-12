
import styled from 'styled-components';

import { AiOutlineCode } from 'react-icons/ai';
import { VscOrganization } from 'react-icons/vsc';

// ELEMENTS COMPONENTS
import { TitleBox } from '../components/TitleBox/TitleBox';
import { LoginTextBox  } from '../components/LoginText/LoginText';

import { 

    UserBox,
    User,
    UserText

} from '../components/UserBox/UserBox';



// CONTAINER STYLES
const HomeContainer = styled.div`
    background-color: ghostwhite;

    main {
        height: 100vh;
        width: 38rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 30rem 1fr;
        align-items: center;
    }


`


// MAIN COMPONENT
export const HomePage = () => {

    return (

        <HomeContainer>
            
            <main>

                <TitleBox>
                    <h1>¡Únete a la comunidad!</h1>
                    <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
                </TitleBox>


                <UserBox>

                    <User>
                        
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
                

                <LoginTextBox>
                    <p>¿Ya tienes cuenta? <span> Inicia sesión </span></p>
                </LoginTextBox> 

            </main>

        </HomeContainer>
        
        

    );

};
        

