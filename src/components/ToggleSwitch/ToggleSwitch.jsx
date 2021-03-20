import React from 'react'
import styles from './ToggleSwitch.module.scss'
import ClassNames from 'classnames/bind'

const cx = ClassNames.bind(styles)


export default function ToggleSwitch(props){
    const {className, inputRef} = props
    return <label className={cx('root', className)}>
        <input type='checkbox' ref={inputRef}/>
        <span className={cx('slider')}/>
    </label>
}