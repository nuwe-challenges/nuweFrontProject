
// Estilos Globales
import { GlobalStyles } from './globalStyles/GlobalStyles';
import { useState } from 'react';

// REACT ROUTER-----------------
import { 

  BrowserRouter as Router, 
  Route

} from 'react-router-dom';

import { UserProvider } from './context/UserContext';


// PÁGINAS----------------------
import { HomePage }       from  './pages/HomePage';
import { SignupPage }     from  './pages/SignupPage';
import { LocationPage }   from  './pages/LocationPage';
import { VerifyPage }     from  './pages/VerifyPage';
import { LoginPage }      from './pages/LoginPage';




// COMPONENT--------------------
function App() {

  const [user, setUser] = useState({

    fullName: '',
    mail: '',
    pass: '',
    phone: '',
    adress: '',
    country: '',
    card: '',
    secret: ''

  });

  return (

    <Router>

    <UserProvider value={ {user, setUser} }>

        <GlobalStyles />

        <Route exact path='/'           component={ HomePage } />
        <Route exact path='/login'      component={ LoginPage } />
        <Route exact path='/signup'     component={ SignupPage } />
        <Route exact path='/location'   component={ LocationPage } />
        <Route exact path='/verify'     component={ VerifyPage } />

    </UserProvider>

    
    </Router>

  );

}; 

export default App;


