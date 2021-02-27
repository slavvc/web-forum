import React, {useState} from 'react'
import styles from './userMenu.module.scss'
import classNames from 'classnames/bind'

import Button from 'react-bootstrap/Button' 
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const cx = classNames.bind(styles)

import UserMenuContent from 'Components/userMenuContent/UserMenuContent'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter, useHistory} from 'react-router-dom'


const profileMenu = <>
    <Button variant='white'>
        Settings
    </Button>
    <Button variant='white'>
        Change password
    </Button>
    <Button variant='white'>
        Log out
    </Button>
</>

export default function(props){
    const {className, isShown, isLoggedIn} = props
    const [registration, setRegistration] = useState(true)
    const history = useHistory()

    return <div 
        className={cx('root', className)}
    >
        <Col lg className={cx('menu', {isShown}, 'px-4', 'py-2')}>
            <BrowserRouter basename='/form'>
                <div
                    className={cx('back', 'align-self-start')}
                    onClick={()=>{
                        history.goBack()
                    }}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                    />
                </div>
                <UserMenuContent/>
            </BrowserRouter>
            {
                // isLoggedIn 
                // ? profileMenu 
                // : registration
                //     ? <RegistrationForm/>
                //     : <LoginForm/>
            }
        </Col>
    </div>
}