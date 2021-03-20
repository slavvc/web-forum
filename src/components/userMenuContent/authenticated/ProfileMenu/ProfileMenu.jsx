import React from 'react'

import Button from 'react-bootstrap/Button' 

export default function ProfileMenu(props){
    const {onLogOut, onChangePassword} = props
    return  <>
        <Button 
            variant='primary' 
            className='mb-2'
            onClick={onChangePassword}
        >
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