import React from 'react'

import LinkContainer from 'Components/LinkContainer/LinkContainer'
import NewThreadFormContainer from 'Components/NewThreadFormContainer/NewThreadFormContainer'
import NewTopicFormContainer from 'Components/NewTopicFormContainer/NewTopicFormContainer'

export default function TopicContent(props){
    const {
        title, topics, threads,
        showNewForms
    } = props
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
            {
                showNewForms
                ? <NewTopicFormContainer/>
                : null
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
            {
                showNewForms
                ? <NewThreadFormContainer/>
                : null
            }
        </div>
    </>
}