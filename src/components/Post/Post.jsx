import React, { useEffect, useRef, useState } from 'react'
import styles from './Post.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


import useWidthCheck from 'Hooks/useWidthCheck'

const minWidth = 350




export default function Post(props){
    const {
        className, user, text,
        showDelete, onDelete
    } = props
    const postRef = useRef(null)
    const usingSmallStyle = useWidthCheck(postRef, minWidth)

    const DeleteButton = <div className={cx(
            'buttonSection',
            {'small': usingSmallStyle},
            'sendButton', 'd-flex', 
            'justify-content-center', 'align-items-center',
            'p-2'
        )}
        onClick={onDelete}
    >
        <FontAwesomeIcon icon={faTrashAlt} role='button'/>
    </div>

    return <div 
        className={cx(
            'root', 
            className, 
            'my-1',
            {small: usingSmallStyle}
        )}
        ref={postRef}
    >
        <div 
            className={cx(
                'userSection',
                {small: usingSmallStyle}
            )}
        >
            <div className='p-1'>
                {user.name}
            </div>
            {
                showDelete && usingSmallStyle
                ? DeleteButton
                : null
            }
        </div>
        <div 
            className={cx('textSection', 'p-1')}
        >
            {text}
        </div>
        {
            showDelete && !usingSmallStyle
            ? DeleteButton
            : null
        }
    </div>
}