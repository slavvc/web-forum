import React from 'react'

import RegistrationForm from '../RegistrationForm/RegistrationForm'

export default function RegistrationFormContainer(props){
    const {goTo} = props
    return <RegistrationForm
        onSubmit={ev => {
            ev.preventDefault()
        }}
    />
}