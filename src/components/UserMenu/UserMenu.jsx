import React, {useState} from 'react'
import styles from './UserMenu.module.scss'
import classNames from 'classnames/bind'


import Col from 'react-bootstrap/Col'

const cx = classNames.bind(styles)

import UserMenuContentContainer from 'Components/userMenuContent/UserMenuContentContainer/UserMenuContentContainer'


export default function UserMenu(props){
    const {className, isShown, isLoggedIn} = props

    return <div 
        className={cx('root', className)}
    >
        <Col lg className={cx('menu', {isShown}, 'px-4', 'py-2')}>
            <UserMenuContentContainer/>
        </Col>
    </div>
}