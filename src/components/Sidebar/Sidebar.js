import styled from "styled-components";

// ELEMENTS COMPONENTS
import { LogoBox, Logo, TextBox, Text, TextIcon } from './SidebarElements';


const SidebarContainer = styled.div`
    
    flex: 0 0 50%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-color: var(--primary);
    height: 100vh;
    justify-content: center;
    align-items: center;

    /* main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
        margin: 0 auto;
    } */
`

export const Sidebar = () => {

    return (

        <SidebarContainer>

            

            <LogoBox>
                <Logo>LOGO</Logo>
            </LogoBox>

            <TextBox>
                <Text>Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</Text>
                <TextIcon>ICONITO</TextIcon>
            </TextBox>

            

        </SidebarContainer>

    );

};

