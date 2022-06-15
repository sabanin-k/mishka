import { FC } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import styles from './App.module.scss'

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Header />
            <main className={styles.container}>

            </main>
        </>
    );
}

export default App;
