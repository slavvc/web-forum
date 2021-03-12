import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import {selectUser} from 'Store/userSlice'

import UserMenuContent from '../UserMenuContent/UserMenuContent'

import LoginFormContainer from '../unauthenticated/LoginFormContainer/LoginFormContainer'
import RegistrationFormContainer from '../unauthenticated/RegistrationFormContainer/RegistrationFormContainer'

import ProfileMenuContainer from '../authenticated/ProfileMenuContainer/ProfileMenuContainer'

const componentDict = {
    login: LoginFormContainer,
    registration: RegistrationFormContainer,
    profile: ProfileMenuContainer
}

export default function UserMenuContentContainer(props){
    const [history, setHistory] = useState(['login'])
    const user = useSelector(selectUser)

    useEffect(() => {
        if(user === null){
            setHistory(['login'])
        }else{
            setHistory(['profile'])
        }
    }, [user])

    const Component = componentDict[history[history.length - 1]]

    const arrowOnClick = ()=>{
        if(history.length >= 2){
            setHistory(history.slice(0,-1))
        }
    }

    return <UserMenuContent
        arrowOnClick={arrowOnClick}
        arrow={history.length > 1}
    >
        <Component
            goTo={(to)=>{
                setHistory(history.concat([to]))
            }}
        />
    </UserMenuContent>
}