//import logo from './logo.svg';
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
import{ getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import React from "react"
import SignUp from "./SignUp"
//import { Container } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import { AuthProvider } from "../contexts/AuthContext"
//this is to route and link pages later eg. sign in page, login...etc.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Home from './Home';
import homepage from './Homepage';
import Homepage2 from './Homepage2';
import indext from './Indext';
import Logout from './Logout';
import Settings from './Settings';
import SubmitFeelings from './SubmitFeelings';
import ChangePass from './ChangePass';
function App() {
  return (
    <Container
    >
   
       <Router>
         <AuthProvider>
            <Switch>
                 <PrivateRoute exact path =  '/indext' component ={indext} />
                 <PrivateRoute  path = '/update-profile' component ={UpdateProfile} />
                 <Route path = '/signup' component ={SignUp} />
                 <Route path = '/login' component ={Login} />
                 <Route path = '/forgot-password' component ={ForgotPassword} />
                 <Route path = '/home' component ={Home}/>
                 <Route path = '/homepage' component ={homepage}/>
                 <Route path = '/homepage2' component ={Homepage2}/>
                 <Route path = '/logout' component ={Logout}/>
                 <Route path = '/settings' component ={Settings}/>
                 <Route path = '/submit-feelings' component ={SubmitFeelings}/>
                 <Route path = '/changePass' component ={ChangePass}/>
            </Switch>
         </AuthProvider>
       </Router>
    </Container>
 

   
  ) 

}


export default App;

