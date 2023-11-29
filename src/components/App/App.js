import React from 'react';
import './app.scss'
import { Header } from '../Header/Header'
import { Login } from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CardsPage } from '../../pages/CardsPage';
import { getProducts } from '../../feature/products/productsSlice'
import { getCategories } from '../../feature/categories/categoriesSlice'


function App() {

    const dispatch = useDispatch()

    const { showForm } = useSelector(state => state.user)

    React.useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
        // dispatch(filterByPrice(100))
    }, [dispatch])

    let classBg = !showForm ? 'background' : 'background__opacity'

    return <div className={classBg}>

        {showForm && <Login />}

        <div className='container'>
            <Header />

            <Routes>
                <Route path='*' element={<HomePage />} />
                <Route path='/products/:productId' element={<ProductPage />} />
                <Route path='/cards' element={<CardsPage />} />
            </Routes>

        </div>

    </div>
}

export default App;
