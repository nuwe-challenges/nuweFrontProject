
import styled from 'styled-components';

import { TitleBox } from '../components/Title/TitleBox';


const HomeContainer = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    background-color: ghostwhite;
    display: grid;
    grid-template-rows: 1fr repeat(2, 20vh) 1fr;


`

export const HomePage = () => {

    return (

     

        <HomeContainer>
            
            <TitleBox>
                <h1>¡Únete a la comunidad!</h1>
                <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
            </TitleBox>

            <div>
                <div>LOGO</div>
                <div>
                    <h4>Developers</h4>
                    <p>Eres una persona que quiere entrar en el mundo DEV</p>
                </div>
            </div>

            <div>
                <div>LOGO</div>
                <div>
                    <h4>Business</h4>
                    <p>Tienes o perteneces a una compañía</p>
                </div>
            </div>

            <div>¿Ya tienes cuenta? LINK </div> 

        </HomeContainer>
        
        

    );

};
        

