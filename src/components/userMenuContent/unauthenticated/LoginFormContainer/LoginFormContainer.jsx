import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from '../LoginForm/LoginForm'

import {authenticated} from 'Store/userSlice'

export default function LoginFormContainer(props){
    const {goTo} = props
    const dispatch = useDispatch()
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [wrongCredentials, setWrongCredentials] = useState(false)
    return <LoginForm
        onSubmit={async ev => {
            ev.preventDefault()
            const username = usernameRef.current?.value
            const password = passwordRef.current?.value
            const res = await fetch(
                '/api/authenticate',
                {
                    method: 'POST',
                    body: new URLSearchParams({username, password})
                }
            )
            if(res.status == 200){
                const json = await res.json()
                const token = json.access_token
                dispatch(authenticated(token))
            }else{
                setWrongCredentials(true)
            }
        }}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        signUpOnClick={()=>{
            goTo('registration')
        }}
        wrongCredentials={wrongCredentials}
    />
}