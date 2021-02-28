import React, { useState } from 'react'
import styles from './userMenuContent.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


import LoginForm from './loginForm/LoginForm'
import RegistrationForm from './registrationForm/RegistrationForm'

const componentDict = {
    login: LoginForm,
    registration: RegistrationForm
}

export default function(props){
    const [history, setHistory] = useState(['login'])

    const Component = componentDict[history[history.length - 1]]
    return <>
        {
            history.length >= 2
            ? <div
                className={cx('back', 'align-self-start')}
                onClick={()=>{
                    if(history.length >= 2){
                        setHistory(history.slice(0,-1))
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                />
            </div>
            : null
        }
        
        <Component
            goTo={(to)=>{
                setHistory(history.concat([to]))
            }}
        />
    </>
}