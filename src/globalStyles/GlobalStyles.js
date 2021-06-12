// Global styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {

    // Fuente tipográfica
    --ff-global: 'Poppins', sans-serif;

    // Tamaño de fuentes
    --fs-titles: 2.6rem;
    --fs-sub-titles: 1.4rem;
    --fs-dev-title: 1.4rem;
    --fs-dev-sub-title: 1.2rem;

    // Colores
    --clr-white: #fff;
    --clr-paragraph: #777;
    --clr-icons: #28c795;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: var(--ff-global);
}

html {
    font-size: 	0.625em;
}
        
`