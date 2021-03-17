import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ChangePassword(props){
    const {
        onSubmit,
        oldPasswordRef,
        newPasswordRef,
        repeatPasswordRef,
        status
    } = props
    return <>
        <Form
            onSubmit={onSubmit}
        >
            <Form.Group controlId='oldPassword'>
                <Form.Label>
                    Old password
                </Form.Label>
                <Form.Control type='password' ref={oldPasswordRef}/>
            </Form.Group>
            <Form.Group controlId='newPassword'>
                <Form.Label>
                    New password
                </Form.Label>
                <Form.Control type='password' ref={newPasswordRef}/>
                <Form.Label>
                    Repeat password
                </Form.Label>
                <Form.Control type='password' ref={repeatPasswordRef}/>
                {
                    !status.samePassword
                    ? <p>Passwords do not match</p>
                    : null
                }
                {
                    status.failMessage.length > 0
                    ? <p>{status.failMessage}</p>
                    : null
                }
            </Form.Group>
            <Button 
                type='submit' 
                variant='primary'
                className='d-block mx-auto'
            >
                Change password
            </Button>
        </Form>
    </>
}