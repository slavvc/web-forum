import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {selectToken} from 'Store/userSlice'
import {selectId, getTopic} from 'Store/contentSlice'

import NewTopicForm from 'Components/NewTopicForm/NewTopicForm'

export default function NewTopicFormContainer(props){
    const {className} = props
    const titleRef = useRef(null)
    const topicId = useSelector(selectId)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    return <NewTopicForm
        className={className}
        titleRef={titleRef}
        onAdd={async ()=>{
            const titleElem = titleRef.current
            if(titleElem !== null){
                const title = titleElem.value
                
                const response = await fetch(
                    '/api/topic',
                    {
                        method: 'POST',
                        body: new URLSearchParams({
                            parent_id: topicId,
                            title: title
                        }),
                        headers: {
                            authorization: `bearer ${token}`
                        }
                    }
                )
                if(response.status == 204){
                    dispatch(getTopic(topicId))
                    titleElem.value = ''
                }
            }
            
        }}
    />
}