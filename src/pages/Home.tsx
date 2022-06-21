import { FC } from 'react'
import About from '../components/About'
import Comments from '../components/Comments'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WeekProduct from '../components/WeekProduct'

export const Home: FC = () => {
    return (
        <>
            <Header />
            <WeekProduct />
            <About />
            <Comments />
            <Contacts />
            <Footer />
        </>
    )
}
