import { FC } from 'react';
import { Home } from '../../pages/Home';
import Navbar from '../Navbar';
import styles from './App.module.scss'

const App: FC = () => {
    return (
        <>
            <Navbar />
                <Home />
        </>
    );
}

export default App;
