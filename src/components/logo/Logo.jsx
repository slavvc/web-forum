import React from 'react'
import styles from './logo.module.scss'
import classNames from 'classnames/bind'

import bgImage from 'Public/pexels-pixabay-33109.jpg'

const cx = classNames.bind(styles)

export default function(props){
    const {className} = props
    
    return <header className={cx('root', className)}>
        <img src={bgImage}></img>
        <div>
            <h1 className={cx('title')}>Glorius Forum</h1>
        </div>
    </header>
}