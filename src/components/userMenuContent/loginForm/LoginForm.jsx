import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function(props){
    const {goTo} = props
    return <>
        <Form>
            <Form.Group controlId='username'>
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control type='text'/>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type='password'/>
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
                goTo('registration')
            }}
        >
            Sign up
        </Button>
    </>
}