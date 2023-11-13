import React from 'react'
import './main.scss'
import { Categories } from '../Categories/Categories'
import { Banner } from '../Banner/Banner'
import { BannerProduct } from '../Banner/BannerProduct'
import { Card } from '../Card/Card'
import { Route, Routes } from 'react-router-dom'

export const Main = () => {

    return <section className='main'>
        <Categories />
        <Routes>
            <Route path='*' element={<Banner />} />
            <Route path='/product' element={<BannerProduct />} />
            <Route path='/cards' element={<Card />} />
        </Routes>
    </section>
}
