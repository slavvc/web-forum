import React from 'react'

import ThreadContentContainer from 'Components/ThreadContentContainer/ThreadContentContainer'
import TopicContentContainer from 'Components/TopicContentContainer/TopicContentContainer'


export default function PageContent(props){
    const {type, data} = props
    return type == 'topic'
        ? <TopicContentContainer {...data}/>
        : type == 'thread'
            ? <ThreadContentContainer {...data}/>
            : null
}