import React from 'react'
import {useSelector} from 'react-redux'

import TopicContent from 'Components/TopicContent/TopicContent'
import {selectUser} from 'Store/userSlice'

export default function TopicContentContainer(props){
    const user = useSelector(selectUser)
    return <TopicContent
        {...props}
        showNewForms={user !== null}
    />
}