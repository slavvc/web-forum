import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Footer(props){
    const {className} = props

    return <footer className={cx('root', className, 'mt-3')}>
        Icons made by 
        <a href="https://www.freepik.com" title="Freepik">
            {' '}Freepik
        </a> 
        {' '}from 
        <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}www.flaticon.com
        </a>
    </footer>
}