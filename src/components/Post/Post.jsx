import React, { useEffect, useRef, useState } from 'react'
import styles from './Post.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import useWidthCheck from 'Hooks/useWidthCheck'

const minWidth = 350


export default function Post(props){
    const {className, user, text} = props
    const postRef = useRef(null)
    const usingSmallStyle = useWidthCheck(postRef, minWidth)

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
                'p-1',
                {small: usingSmallStyle}
            )}
        >
            {user}
        </div>
        <div 
            className={cx('textSection', 'p-1')}
        >
            {text}
        </div>
    </div>
}