import React from 'react'
import styles from './UserMenuContent.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


export default function UserMenuContent(props){
    const {children, arrow, arrowOnClick} = props
    return <>
        {
            arrow
            ? <div
                className={cx('back', 'align-self-start')}
                onClick={arrowOnClick}
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                />
            </div>
            : null
        }
        {children}
    </>
}