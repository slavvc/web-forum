import React, { useRef, useState } from 'react'

import ChangePassword from '../ChangePassword/ChangePassword'

import {selectToken} from 'Store/userSlice'
import {useSelector} from 'react-redux'

function checkPassword(
    password, repeatPassword, status, setStatus
){
    const res = password == repeatPassword
    if(!res){
        setStatus({...status, samePassword: false})
    }
    return res
}

async function changePassword(oldPassword, newPassword, token, status, setStatus, goTo){
    const response = await fetch(
        '/api/password',
        {
            method: 'POST',
            body: new URLSearchParams({
                old_password: oldPassword,
                new_password: newPassword
            }),
            headers: {
                authorization: `bearer ${token}`
            }
        }
    )
    switch(response.status){
        case 204:
            setStatus({samePassword: true, failMessage: ''})
            goTo('profile')
            break
        case 400:
            const json = await response.json()
            setStatus({...status, failMessage: json.detail})
    }
}

export default function ChangePasswordContainer(props){
    const {goTo} = props
    const oldPasswordRef = useRef(null)
    const newPasswordRef = useRef(null)
    const repeatPasswordRef = useRef(null)
    const [status, setStatus] = useState({
        samePassword: true,
        failMessage: ''
    })
    const token = useSelector(selectToken)
    return <ChangePassword
        onSubmit={async ev => {
            ev.preventDefault()
            
            const newPassword = newPasswordRef.current?.value
            const repeatPassword = repeatPasswordRef.current?.value
            const oldPassword = oldPasswordRef.current?.value
            if(checkPassword(
                newPassword, repeatPassword, status, setStatus
            )){
                await changePassword(
                    oldPassword, newPassword, 
                    token, status, setStatus, goTo
                )
            }
        }}
        oldPasswordRef={oldPasswordRef}
        newPasswordRef={newPasswordRef}
        repeatPasswordRef={repeatPasswordRef}
        status={status}
    />
}