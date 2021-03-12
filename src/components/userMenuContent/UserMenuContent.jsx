import React, { useState } from 'react'
import styles from './UserMenuContent.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


import LoginFormContainer from './LoginFormContainer/LoginFormContainer'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const componentDict = {
    login: LoginFormContainer,
    registration: RegistrationForm
}

export default function UserMenuContent(props){
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