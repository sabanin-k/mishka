import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Home } from '../../pages/Home';
import { Order } from '../../pages/Order';
import { Catalog } from '../../pages/Catalog';
import { Footer } from '../Footer';

export const App: FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/order' element={<Order />}></Route>
                    <Route path='/catalog' element={<Catalog />}></Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
}
