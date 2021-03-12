import React, {useState} from 'react'
import styles from './User.module.scss'
import classNames from 'classnames/bind'

import Image from 'react-bootstrap/Image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown'

import userImage from 'Public/flaticon/user.svg'

import UserMenu from 'Components/Usermenu/UserMenu'

const cx = classNames.bind(styles)

export default function User(props){
    const {className, userInfo} = props
    const [shown, setShown] = useState(false)

    const userName = userInfo?.name
    return <div 
        className={cx(className, 'root', 'p-1', 'ml-1')}
    >
        <div 
            onClick={()=>{
                setShown(!shown)
            }}
            className={cx('wrapper')}
        >
            <div className={cx('picture')}>
                <Image 
                    src={userImage} 
                    roundedCircle
                />
            </div>
            <span>{userName}</span>
            <FontAwesomeIcon 
                icon={faAngleDown}
                className='ml-1'
            />
        </div>
        <UserMenu 
            className={cx('menu')} 
            isShown={shown} 
            isLoggedIn={userInfo != undefined}
        />
    </div>
}