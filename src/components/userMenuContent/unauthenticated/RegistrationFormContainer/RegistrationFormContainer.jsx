import React, { useRef, useState } from 'react'

import RegistrationForm from '../RegistrationForm/RegistrationForm'

function checkPassword(
    password, repeatPassword, status, setStatus
){
    const res = password == repeatPassword
    if(!res){
        setStatus({...status, samePassword: false})
    }
    return res
}

async function signUp(username, password, status, setStatus){
    const response = await fetch(
        '/api/signup',
        {
            method: 'POST',
            body: new URLSearchParams({username, password})
        }
    )
    if(response.status == 204){
        
    }
}

export default function RegistrationFormContainer(props){
    const {goTo} = props
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const repeatPasswordRef = useRef(null)
    const [status, setStatus] = useState({
        samePassword: true
    })
    return <RegistrationForm
        onSubmit={async ev => {
            ev.preventDefault()
            
            const password = passwordRef.current?.value
            const repeatPassword = repeatPasswordRef.current?.value
            const username = usernameRef.current?.value
            if(checkPassword(
                password, repeatPassword, status, setStatus
            )){
                await signUp(username, password, status, setStatus)
            }
        }}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        repeatPasswordRef={repeatPasswordRef}
    />
}