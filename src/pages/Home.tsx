import { FC } from 'react'
import About from '../components/About'
import Header from '../components/Header'
import WeekProduct from '../components/WeekProduct'

export const Home: FC = () => {
    return (
        <>
            <Header />
            <WeekProduct />
            <About />
        </>
    )
}
