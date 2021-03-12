import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function LoginForm(props){
    const {
        goTo, onSubmit,
        usernameRef, passwordRef
    } = props
    return <>
        <Form
            onSubmit={onSubmit}
        >
            <Form.Group controlId='username'>
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control type='text' ref={usernameRef}/>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type='password' ref={passwordRef}/>
            </Form.Group>
            <Button 
                type='submit' 
                variant='primary'
                className='d-block mx-auto'
            >
                Log in
            </Button>
        </Form>
        or
        <Button 
            variant='primary'
            onClick={()=>{
                console.log(goTo)
                goTo('registration')
            }}
        >
            Sign up
        </Button>
    </>
}