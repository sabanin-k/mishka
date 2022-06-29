import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { HomePage } from '../../pages/HomePage';
import { OrderPage } from '../../pages/OrderPage';
import { CatalogPage } from '../../pages/CatalogPage';
import { Footer } from '../common/Footer';

export const App: FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/order' element={<OrderPage />}></Route>
                    <Route path='/catalog' element={<CatalogPage />}></Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
}
