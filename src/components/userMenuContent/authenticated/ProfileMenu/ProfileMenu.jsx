import React from 'react'

import Button from 'react-bootstrap/Button' 

export default function ProfileMenu(props){
    const {onLogOut} = props
    return  <>
        <Button variant='white'>
            Settings
        </Button>
        <Button variant='white'>
            Change password
        </Button>
        <Button 
            variant='primary'
            onClick={onLogOut}
        >
            Log out
        </Button>
    </>
}