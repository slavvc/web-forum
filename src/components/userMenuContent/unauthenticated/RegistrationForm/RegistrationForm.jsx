import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function RegistrationForm(props){
    const {onSubmit} = props
    return <>
        <Form
            onSubmit={onSubmit}
        >
            <Form.Group controlId='username'>
                <Form.Label>
                    New username
                </Form.Label>
                <Form.Control type='text'/>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    New password
                </Form.Label>
                <Form.Control type='password'/>
                <Form.Label>
                    Repeat password
                </Form.Label>
                <Form.Control type='password'/>
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