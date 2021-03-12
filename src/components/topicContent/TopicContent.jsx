import React from 'react'
import styles from './TopicContent.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import LinkContainer from 'Components/LinkContainer/LinkContainer'

export default function TopicContent(props){
    const {title, topics, threads} = props
    return <>
        <h1 className='mx-2'>
            {title}
        </h1>
        <div className='mx-2'>
            {
                topics.map((topic) => (
                    <LinkContainer
                        type='topic'
                        link={topic.link}
                        data={topic}
                        key={topic.link}
                    />
                ))
            }
        </div>
        <div className='mt-4'/>
        <div className='mx-2'>
            {
                threads.map((thread) => (
                    <LinkContainer
                        type='thread'
                        link={thread.link}
                        data={thread}
                        key={thread.link}
                    />
                ))
            }
        </div>
    </>
}