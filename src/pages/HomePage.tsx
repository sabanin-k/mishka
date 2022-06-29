import { FC } from 'react'
import { HeaderMain } from '../components/Home/HeaderMain'
import { WeekProduct } from '../components/Home/WeekProduct'
import { About } from '../components/Home/About'
import { Comments } from '../components/Home/Comments'
import { Contacts } from '../components/Home/Contacts'

export const HomePage: FC = () => {
    return (
        <>
            <HeaderMain />
            <WeekProduct />
            <About />
            <Comments />
            <Contacts />
        </>
    )
}
