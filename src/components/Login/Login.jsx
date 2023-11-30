import React from 'react'
import './login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { modeWindow } from '../../feature/user/userSlice'
import { LoginAccaunt } from '../Login/LoginAccaunt/LoginAccaunt'
import { CreateAccaunt } from './CreateAccaunt/CreateAccaunt'

export const Login = () => {

    const dispatch = useDispatch()

    const { loginOrLogUp } = useSelector(state => state.user)


    const close = () => dispatch(modeWindow(false))


    return <div className='login'>

        <div className="login__register">
            <h3 className='login__title' >Register</h3>
            <div className="login__close" onClick={close}>
                <svg className='svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.375 4.375L15.625 15.625" stroke="#576067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.375 15.625L15.625 4.375" stroke="#576067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>

        {loginOrLogUp === 'logup' ? <CreateAccaunt /> : <LoginAccaunt />}

    </div>
}
