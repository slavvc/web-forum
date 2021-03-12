import React from 'react'
import { useDispatch } from 'react-redux'

import {setUser} from 'Store/userSlice'

import ProfileMenu from '../ProfileMenu/ProfileMenu'

export default function ProfileMenuContainer(props){
    const dispatch = useDispatch()

    return <ProfileMenu
        onLogOut={()=>{
            dispatch(setUser(null))
        }}
    />
}