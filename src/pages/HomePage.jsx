import React from 'react'
import { Common } from '../components/common/Common'
import { Categories } from '../components/Categories/Categories'
import { Banner } from '../components/Banner/Banner'

export const HomePage = () => {
    return <>
        <div className='main'>
            <Categories />
            <Banner />
        </div>
        <Common />
    </>
}
