import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {selectToken, selectUser} from 'Store/userSlice'
import {selectId, getThread} from 'Store/contentSlice'

import NewPostForm from 'Components/NewPostForm/NewPostForm'

export default function NewPostFormContainer(props){
    const {className} = props
    const textRef = useRef(null)
    const threadId = useSelector(selectId)
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    return <NewPostForm
        className={className}
        username={user.name}
        textRef={textRef}
        onSend={async ()=>{
            const text = textRef.current?.value
            const response = await fetch(
                '/api/message',
                {
                    method: 'POST',
                    body: new URLSearchParams({
                        thread_id: threadId,
                        message: text
                    }),
                    headers: {
                        authorization: `bearer ${token}`
                    }
                }
            )
            if(response.status == 204){
                dispatch(getThread(threadId))
            }
        }}
    />
}