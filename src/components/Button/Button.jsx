import React from 'react'
import './button.scss'

export const Button = ({ type = 'button', children, disabled = false, width = 140 }) => {
    if (!disabled) {
        return <button type={type}
            style={{ width: width }}
            disabled={disabled}
            className='button'>
            {children}
        </button>
    }
    return <button
        type={type}
        disabled={disabled}
        className='button__disabled'>
        {children}
    </button>
}
