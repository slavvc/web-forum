import React from 'react'

import Thread from 'Components/Thread/Thread'
import Topic from 'Components/Topic/Topic'

import { useHistory } from 'react-router-dom'


const componentDict = {
    topic: Topic,
    thread: Thread
}

export default function LinkContainer(props){
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