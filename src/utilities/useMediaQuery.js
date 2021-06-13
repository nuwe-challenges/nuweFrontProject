

// REACT RESPONSIVE
import { useMediaQuery } from 'react-responsive';

export const QueryDesktop = (element) => {

    const desktopVersion = useMediaQuery({
        query: '(min-width: 1024px)'
    });

    return desktopVersion ? element  :  null;

};
     


