import React from 'react'

import ThreadContent from 'Components/threadContent/ThreadContent'
import TopicContent from 'Components/topicContent/TopicContent'


export default function(props){
    const {type, data} = props
    return type == 'topic'
        ? <TopicContent {...data}/>
        : type == 'thread'
            ? <ThreadContent {...data}/>
            : null
}