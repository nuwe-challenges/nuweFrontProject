// Global styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {

    // Fuente tipográfica
    --ff-global: 'Poppins', sans-serif;

    // Tamaño de fuentes
    --fs-titles: 2.4rem;
    --fs-sub-titles: 1.4rem;
    --fs-dev-title: 1.4rem;
    --fs-dev-sub-title: 1.2rem;

    // Colores
    --primary: #14b5a0;
    --clr-icons: #28c795;
    --clr-white: #fff;
    --clr-paragraph: #777;

    --clr-label-input: #777;

    --clr-header-text: #777;
    --clr-header-dark-text: #5b79a3;

    // Sombras
    --box-shadow: 0 4px 4px rgba(3, 3, 3, .1);
    --box-shadow-input: 0 0 4px var(--primary);

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: var(--ff-global);
}

html {
    font-size: 	0.625em;

    @media screen and (min-width: 1024px) {
        font-size: 	0.76em;
    }
}
        
`