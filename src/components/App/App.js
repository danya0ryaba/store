import React, { Suspense } from 'react';
import './app.scss'
import { Login } from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../feature/products/productsSlice'
import { getCategories } from '../../feature/categories/categoriesSlice'

const HomePage = React.lazy(() => import('../../pages/HomePage'))
const ProductPage = React.lazy(() => import('../../pages/ProductPage'))
const CardsPage = React.lazy(() => import('../../pages/CardsPage'))
const Header = React.lazy(() => import('../Header/Header'))

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

            <Suspense fallback={<div>LOADING...</div>}>
                <Routes>
                    <Route path='*' element={<HomePage />} />
                    <Route path='/products/:productId' element={<ProductPage />} />
                    <Route path='/cards' element={<CardsPage />} />
                </Routes>
            </Suspense>

        </div>
    </div>
}

export default App;
