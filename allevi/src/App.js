/**
 * Allevi 2-Page App
 * -----------------
 * 1. Login
 * 2. See User's Printers
 */

import { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import AppContext from './AppContext';

import Home from './home/Home';
import Login from './login/Login';

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({ });
  const [printerData, setPrinterData] = useState([])

  return (
    <AppContext.Provider value={{ 
      userData, setUserData,
      printerData, setPrinterData,
    }}>
      {children}
    </AppContext.Provider>
  )
}

let App = () => {
  let { userData, printerData } = useContext(AppContext);

  return (
    <AppProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div>
          test
          {() => alert(JSON.stringify(userData))}
          {JSON.stringify(printerData)}
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            {
              userData == {}
                ? <Redirect to="/home" />
                : <Login />
            }
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
