import React from 'react';
import './app.scss'
import { Header } from '../Header/Header'
import { Login } from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CardsPage } from '../../pages/CardsPage';


function App() {

    const dispatch = useDispatch()

    const [login, setLogin] = React.useState(false)

    let classBg = !login ? 'background' : 'background__opacity'

    return <div className={classBg}>

        {login && <Login />}

        <div className='container'>
            <Header />
            <Routes>
                <Route path='*' element={<HomePage />} />
                <Route path='/products' element={<ProductPage />} />
                <Route path='/cards' element={<CardsPage />} />
            </Routes>
        </div>

    </div>
}

export default App;
