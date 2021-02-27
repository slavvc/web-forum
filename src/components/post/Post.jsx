import React, { useEffect, useRef, useState } from 'react'
import styles from './post.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const minWidth = 350


export default function(props){
    const {className, user, text} = props
    const postRef = useRef(null)
    const [usingSmallStyle, setUsingSmallStyle] = useState(false)

    const checkWidth = ()=>{
        const width = postRef.current?.offsetWidth
        if(width < minWidth){
            setUsingSmallStyle(true)
        }else{
            setUsingSmallStyle(false)
        }
    }

    useEffect(checkWidth, [postRef])

    useEffect(()=>{
        addEventListener('resize', checkWidth)
        return ()=>{
            removeEventListener('resize', checkWidth)
        }
    })

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