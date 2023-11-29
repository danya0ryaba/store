import React from 'react'
import '../login.scss'
import { Button } from '../../Button/Button'
import { Field, Form, Formik } from 'formik'
import { modeLogin, authorizationUser, modeWindow } from '../../../feature/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export const LoginAccaunt = () => {

    const dispatch = useDispatch()

    const handleModeLogin = () => dispatch(modeLogin('logup'))

    const handleLogin = (value) => {
        console.log(value);
        dispatch(authorizationUser(value))
        // dispatch(modeWindow(false))
    }

    return <Formik initialValues={{ email: '', password: '' }}
        onSubmit={value => handleLogin(value)}>

        {({ errors, touched, handleReset }) => <Form>

            <div>
                <Field name='email' placeholder='email' type="email" validate={() => { }} />
                <Field name='password' placeholder='password' type="password" className="password" validate={() => { }} />
            </div>

            <div className="loginForButton" onClick={handleModeLogin}>
                <Button type='submit' width={272}>Log In</Button>
            </div>

            <div className="loginForButton" onClick={() => dispatch(modeLogin('logup'))}>
                <Button type='button' width={272}>Create an account</Button>
            </div>

        </Form>}

    </Formik>






























    {/* <div>
            <button onClick={() => { }}>back</button>
            <input placeholder='email' type="email" onChange={() => { }} />
            <input placeholder='Password' type="password" className="password" onChange={() => { }} />
        </div>

        <div className="loginForButton" onClick={() => { }}>
            <Button width={272}>Login</Button>
        </div> */}





}
