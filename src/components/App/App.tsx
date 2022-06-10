import { FC } from 'react';
import Header from '../Header';
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
