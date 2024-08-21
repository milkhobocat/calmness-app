import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useAuth()
    return (
        // wrapper around the current route
        <Route
          {...rest}
          render = {props =>{
              //if we have a current user...
              return currentUser ? <Component {...props} /> : <Redirect to = '/login'/>

          }}
        >
            
        </Route>
    )
}
