import { FC } from 'react';
import Header from '../Navbar';
import styles from './App.module.scss'

const App: FC = () => {
    return (
        <>
            <Header />
            <main className={styles.container}>

            </main>
        </>
    );
}

export default App;
