import React, { useRef } from 'react'
import styles from './NewThreadForm.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import veganImage from 'Public/flaticon/vegetarian.svg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faScroll} from '@fortawesome/free-solid-svg-icons'

import ToggleSwitch from 'Components/ToggleSwitch/ToggleSwitch'

import useWidthCheck from 'Hooks/useWidthCheck'

const veganSign = <img 
    className={cx('vegan')} 
    src={veganImage}
    title="This thread is vegan safe"
/>


export default function(props){
    const {
        className, titleRef,
        isVeganRef, onAdd
    } = props
    const ref = useRef(null)
    const usingSmallStyle = useWidthCheck(ref, 350)
    return <div
        className={
            cx(
                'root', className, 'my-1',
                {small: usingSmallStyle}
            )
        }
        ref={ref}
    >
        <div className={cx('formSection', 'py-1')}>
            <FontAwesomeIcon icon={faScroll} className={cx('scroll')}/>
            <div className={cx('titleSection')}>
                <input type='text' placeholder='title' ref={titleRef}/>
            </div>
            <div className={cx('switch')}>
                {veganSign}
                <ToggleSwitch inputRef={isVeganRef}/>
            </div>
        </div>
        
        <div 
            className={cx(
                'buttonSection',
                {small: usingSmallStyle}
            )} 
            onClick={onAdd}
        >
            <FontAwesomeIcon icon={faPlusCircle}/>
        </div>
    </div>
}