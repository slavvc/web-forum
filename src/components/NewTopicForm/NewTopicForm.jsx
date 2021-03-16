import React, { useRef } from 'react'
import styles from './NewTopicForm.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


import folderImage from 'Public/flaticon/folder.svg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

import useWidthCheck from 'Hooks/useWidthCheck'

export default function(props){
    const {
        className, titleRef,
        onAdd
    } = props
    const lastPost = ''

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
        <div className={cx('titleSection', 'py-1', 'px-3')}>
            <img
                className={cx('folder')}
                src={folderImage}
            />
            <div>
                <input 
                    type='text' 
                    placeholder='title'
                    className='w-100'
                    ref={titleRef}
                />
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