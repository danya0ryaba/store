import React from 'react'
import './login.scss'
import { Button } from '../Button/Button'

export const Login = () => {
    return <div className='login'>
        <div className="login__register">
            <h3 className='login__title' >Register</h3>
            <div className="login__close">
                <svg className='svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.375 4.375L15.625 15.625" stroke="#576067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.375 15.625L15.625 4.375" stroke="#576067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>

        <input placeholder='email' type="email" />
        <input placeholder='Password' type="password" className="password" />
        <input placeholder='Username' type="text" className="username" />

        <div className="loginForButton">
            <Button width={272}>Create an account</Button>
        </div>

    </div>
}
