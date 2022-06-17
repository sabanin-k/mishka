import { FC } from 'react';
import { Home } from '../../pages/Home';
import Navbar from '../Navbar';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Home />
            </main>
        </>
    );
}

export default App;
