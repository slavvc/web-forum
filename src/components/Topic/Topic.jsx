import React from 'react'
import styles from './Topic.module.scss'
import classNames from 'classnames/bind'

import folderImage from 'Public/flaticon/folder.svg'

const cx = classNames.bind(styles)

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


export default function Topic(props){
    const {
        className, title, lastPost,
        numThreads, numTopics, link,
        onClick, showDelete, onDelete
    } = props
    
    const deleteButton = <div className={cx(
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
                <img
                    className={cx('folder')}
                    src={folderImage}
                />
                {title}
            </h1>
            <p>({numTopics} topics, {numThreads} threads)</p>
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