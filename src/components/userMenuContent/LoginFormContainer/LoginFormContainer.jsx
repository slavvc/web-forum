import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from '../LoginForm/LoginForm'

import {authenticated} from 'Store/userSlice'

export default function LoginFormContainer(props){
    const {goTo} = props
    const dispatch = useDispatch()
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
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
                console.log(token)
                dispatch(authenticated(token))
            }
            console.log(res)
        }}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        goTo={goTo}
    />
}