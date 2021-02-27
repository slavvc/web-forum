import React, { useEffect } from 'react'

import {Route, useHistory, Redirect, Switch, Router} from 'react-router-dom'
import LoginForm from './loginForm/LoginForm'
import RegistrationForm from './registrationForm/RegistrationForm'

export default function(props){
    const history = useHistory()

    useEffect(()=>{
        // history.push('/login')
    }, [])

    return <Switch>
        <Route exact path='/login'>
            <LoginForm/>
        </Route>
        <Route exact path='/registration'>
            <RegistrationForm/>
        </Route>
        <Route path='/'>
            <Redirect to='/login'/> 
        </Route>
    </Switch>
}