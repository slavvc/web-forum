import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Post from 'Components/Post/Post'

import {selectUser, selectToken} from 'Store/userSlice'
import {getThread, selectId} from 'Store/contentSlice'

export default function(props){
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const threadId = useSelector(selectId)
    return <Post {...props}
        showDelete={user?.id === props.user.id}
        onDelete={async () => {
            const response = await fetch(
                '/api/message',
                {
                    method: 'DELETE',
                    body: new URLSearchParams({
                        post_id: props.id
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

