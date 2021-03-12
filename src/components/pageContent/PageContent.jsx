import React from 'react'

import ThreadContentContainer from 'Components/ThreadContentContainer/ThreadContentContainer'
import TopicContent from 'Components/TopicContent/TopicContent'


export default function PageContent(props){
    const {type, data} = props
    return type == 'topic'
        ? <TopicContent {...data}/>
        : type == 'thread'
            ? <ThreadContentContainer {...data}/>
            : null
}