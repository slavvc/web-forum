import React, {useState} from 'react'
import styles from './UserMenu.module.scss'
import classNames from 'classnames/bind'

import Button from 'react-bootstrap/Button' 
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const cx = classNames.bind(styles)

import UserMenuContent from 'Components/UserMenuContent/UserMenuContent'


const ProfileMenu = <>
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

export default function UserMenu(props){
    const {className, isShown, isLoggedIn} = props

    return <div 
        className={cx('root', className)}
    >
        <Col lg className={cx('menu', {isShown}, 'px-4', 'py-2')}>
            <UserMenuContent/>
        </Col>
    </div>
}