import React from 'react'
import {useSelector} from 'react-redux'

import ThreadContent from 'Components/ThreadContent/ThreadContent'
import {selectUser} from 'Store/userSlice'

export default function ThreadContentContainer(props){
    const {title, posts} = props
    const user = useSelector(selectUser)
    return <ThreadContent
        title={title}
        posts={posts}
        isLoggedIn={user !== null}
    />
}