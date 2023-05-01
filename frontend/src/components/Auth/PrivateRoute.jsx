import React,{useContext} from 'react';
import {Route, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../App';


function PrivateRoute({component:Component, ...rest}) {
    const navigate = useNavigate();
    const {loggedIn} = useContext(AuthContext);

  return (
    <Route {...rest} render={(props)=> loggedIn ? <Component {...props}/>:navigate('/')}/>
  )
}

export default PrivateRoute;