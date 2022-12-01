import React from 'react'
import Navbar from '../components/Navbar'
import SignUp from '../components/Registration'
import '../styles/RegistrationStyles.css'

const RegistrationPages = () => {
    return (
        <div>
            <Navbar/>
            <div className='page'>
                <SignUp/>
            </div>
        </div>

    )
}

export default RegistrationPages
