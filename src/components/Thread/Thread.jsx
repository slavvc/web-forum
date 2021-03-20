import React from 'react'
import styles from './Thread.module.scss'
import classNames from 'classnames/bind'

import veganImage from 'Public/flaticon/vegetarian.svg'

const cx = classNames.bind(styles)

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faScroll} from '@fortawesome/free-solid-svg-icons'

const veganSign = <img 
    className={cx('vegan')} 
    src={veganImage}
    title="This thread is vegan safe"
/>

export default function Thread(props){
    const {
        className, title, lastPost, 
        isVegan, numPosts, onClick,
        showDelete, onDelete
    } = props

    const deleteButton = <div 
        className={cx(
            'buttonSection',
            'deleteButton', 'd-flex', 
            'justify-content-center', 'align-items-center',
            'p-2'
        )}
        onClick={onDelete}
    >
        <FontAwesomeIcon icon={faTrashAlt} role='button'/>
    </div>


    return <div
        className={
            cx('root', className, 'my-1')
        }
        onClick={onClick}
    >
        <div className={cx('titleSection', 'py-1', 'px-3')}>
            <h1>
                <FontAwesomeIcon icon={faScroll} className={cx('scroll')}/>
                {title}
                {isVegan ? veganSign : null}
            </h1>
            <p>({numPosts} posts)</p>
        </div>
        {/* <div className={cx('postsSection')}>
            {lastPost}
        </div> */}
        {
            showDelete
            ? deleteButton
            : null
        }
    </div>
}