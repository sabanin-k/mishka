import { FC } from 'react'
import About from '../components/About'
import Comments from '../components/Comments'
import Header from '../components/Header'
import WeekProduct from '../components/WeekProduct'

export const Home: FC = () => {
    return (
        <>
            <Header />
            <WeekProduct />
            <About />
            <Comments />
        </>
    )
}
