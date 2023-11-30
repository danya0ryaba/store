import React from 'react'
import '../login.scss'
import { Button } from '../../Button/Button'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { modeLogin,createUser,modeWindow } from '../../../feature/user/userSlice'

export const CreateAccaunt = () => {

    const dispatch=useDispatch()

    const handleCreateUser=(value)=>{
        dispatch(createUser(value))
        dispatch(modeWindow(false))
    }
    
    return <Formik initialValues={{ email: '', password: '', name: '', avatar: '' }}
        onSubmit={value => handleCreateUser(value)}>

        {({ errors, touched, handleReset }) => <Form>
            
            <Field name='name' placeholder='name' type="text"  validate={() => { }} />
            <Field name='email' placeholder='email' type="email" validate={() => { }} />
            <Field name='password' placeholder='password' type="password"  validate={() => { }} />
            <Field name='avatar' placeholder='avatar' type="text"  validate={() => { }} />

            <div className="loginForButton">
                <Button type={'submit'} width={272}>Create an account</Button>
            </div>
            
            <div className="loginForButton" onClick={()=>dispatch(modeLogin('login'))}>
                <Button type={'button'} width={272}>Log In</Button>
            </div>
         </Form>}
       
    </Formik>
}
















      
                // <Form>
                   
                //     {props.messageError.length > 0 ? <div>{props.messageError[0]}</div> : false}

                //     {props.captchaUrl && <img src={props.captchaUrl} />}
                //     {props.captchaUrl && <Field name='captchaValue' type="text" />}
                //     <button type='submit'>SUBMIT</button>
                // </Form>)}
   