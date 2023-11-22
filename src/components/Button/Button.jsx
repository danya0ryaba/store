import React from 'react'
import './button.scss'

export const Button = ({ children, disabled, width = 140 }) => {
    if (!disabled) {
        return <button
            // onClick={() => alert('click')}
            style={{ width: width }}
            disabled={disabled}
            className='button'>
            {children}
        </button>
    }
    return <button
        disabled={disabled}
        className='button__disabled'>
        {children}
    </button>
}
