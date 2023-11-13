import React from 'react';
import './app.scss'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Trending } from '../Tranding/Trending';
import { Common } from '../common/Common';
import { Login } from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Card } from '../Card/Card';


function App() {

    // React.useEffect(() => {

    // }, [])

    const [login, setLogin] = React.useState(false)

    let classBg = !login ? 'background' : 'background__opacity'

    return <div className={classBg}>

        {login && <Login />}

        <div className='container'>

            <Header />

            <Main />

            <Routes>
                <Route path='/' element={<Common />} />
                <Route path='product' element={<Trending />} />
                {/* <Route path='/cards' element={<Card />} /> */}
            </Routes>

        </div>
    </div>
}

export default App;
