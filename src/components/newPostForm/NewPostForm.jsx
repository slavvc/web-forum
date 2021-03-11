import React, { useRef } from 'react'
import styles from './newPostForm.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import useWidthCheck from 'Hooks/useWidthCheck'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export default function(props){
    const {className} = props
    const ref = useRef(null)
    const usingSmallStyle = useWidthCheck(ref, 350)
    return <div 
        className={cx(
            'root', 
            className, 
            'my-1',
            {small: usingSmallStyle}
        )}
        ref={ref}
    >
        <div 
            className={cx(
                'userSection', 
                'p-1',
                {small: usingSmallStyle}
            )}
        >
            new post
        </div>
        <div 
            className={cx('textSection', 'p-1')}
        >
            <input 
                type='text'
                placeholder='write text here'
            />
        </div>
        <div className={cx(
            'buttonSection',
            {'small': usingSmallStyle},
            'sendButton', 'd-flex', 
            'justify-content-center', 'align-items-center',
            'p-2'
        )}>
            <FontAwesomeIcon icon={faPaperPlane} role='button'/>
        </div>
    </div>
}