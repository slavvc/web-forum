import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function RegistrationForm(props){
    const {
        onSubmit,
        usernameRef,
        passwordRef,
        repeatPasswordRef,
        status
    } = props
    return <>
        <Form
            onSubmit={onSubmit}
        >
            <Form.Group controlId='username'>
                <Form.Label>
                    New username
                </Form.Label>
                <Form.Control type='text' ref={usernameRef}/>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    New password
                </Form.Label>
                <Form.Control type='password' ref={passwordRef}/>
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
                Sign up
            </Button>
        </Form>
    </>
}