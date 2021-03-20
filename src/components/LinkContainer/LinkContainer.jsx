import React from 'react'

import Thread from 'Components/Thread/Thread'
import Topic from 'Components/Topic/Topic'

import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {selectUser, selectToken} from 'Store/userSlice'
import {getTopic, selectId} from 'Store/contentSlice'

const componentDict = {
    topic: Topic,
    thread: Thread
}

export default function LinkContainer(props){
    const {link, type, data} = props
    const history = useHistory()

    const user = useSelector(selectUser)
    const token = useSelector(selectToken)

    const dispatch = useDispatch()
    const topicId = useSelector(selectId)

    const Component = componentDict[type]
    return <Component
        onClick={()=>{
            history.push(`/${type}/${link}`)
        }}
        {...data}
        showDelete={user?.id ===  data.user.id}
        onDelete={async ev => {
            ev.stopPropagation()
            const response = await fetch(
                `/api/${type}`,
                {
                    method: 'DELETE',
                    body: new URLSearchParams({
                        [`${type}_id`]: link
                    }),
                    headers: {
                        authorization: `bearer ${token}`
                    }
                }
            )
            if(response.status == 204){
                dispatch(getTopic(topicId))
            }
        }}
    />
}