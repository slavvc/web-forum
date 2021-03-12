import React from 'react'

import ThreadContent from 'Components/ThreadContent/ThreadContent'
import TopicContent from 'Components/TopicContent/TopicContent'


export default function PageContent(props){
    const {type, data} = props
    return type == 'topic'
        ? <TopicContent {...data}/>
        : type == 'thread'
            ? <ThreadContent {...data}/>
            : null
}