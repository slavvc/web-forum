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

async function signUp(username, password, status, setStatus, goTo){
    const response = await fetch(
        '/api/signup',
        {
            method: 'POST',
            body: new URLSearchParams({username, password})
        }
    )
    switch(response.status){
        case 204:
            setStatus({samePassword: true, failMessage: ''})
            goTo('login')
            break
        case 400:
            const json = await response.json()
            setStatus({...status, failMessage: json.detail})
    }
}

export default function RegistrationFormContainer(props){
    const {goTo} = props
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const repeatPasswordRef = useRef(null)
    const [status, setStatus] = useState({
        samePassword: true,
        failMessage: ''
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
                await signUp(username, password, status, setStatus, goTo)
            }
        }}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        repeatPasswordRef={repeatPasswordRef}
        status={status}
    />
}