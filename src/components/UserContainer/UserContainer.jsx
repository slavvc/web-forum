import React from 'react'

import User from 'Components/User/User'

import {selectUser} from 'Store/userSlice'
import { useSelector } from 'react-redux'

export default function UserContainer(props){
    const user = useSelector(selectUser)
    return <User userInfo={user}/>
}