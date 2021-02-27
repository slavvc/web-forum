import React from 'react'

import Thread from 'Components/thread/Thread'
import Topic from 'Components/topic/Topic'

import { useHistory } from 'react-router-dom'


const componentDict = {
    topic: Topic,
    thread: Thread
}

export default function(props){
    const {link, type, data} = props
    let history = useHistory()

    const Component = componentDict[type]
    return <Component
        onClick={()=>{
            history.push(`/${type}/${link}`)
        }}
        {...data}
    />
}