
// Estilos Globales
import { GlobalStyles } from './globalStyles/GlobalStyles';

// REACT ROUTER-----------------
import { 

  BrowserRouter as Router, 
  Route

} from 'react-router-dom';



// PÁGINAS----------------------
import { HomePage }       from  './pages/HomePage';
import { SignupPage }     from  './pages/SignupPage';
import { LocationPage }   from  './pages/LocationPage';
import { VerifyPage }     from  './pages/VerifyPage';
import { LoginPage }      from './pages/LoginPage';



// COMPONENT--------------------
function App() {

  return (

    <Router>
      <GlobalStyles />

      <Route exact path='/'           component={ HomePage } />
      <Route exact path='/login'      component={ LoginPage } />
      <Route exact path='/signup'     component={ SignupPage } />
      <Route exact path='/location'   component={ LocationPage } />
      <Route exact path='/verify'     component={ VerifyPage } />
    
    </Router>

  );

}; 

export default App;


