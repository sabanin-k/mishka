import { FC } from 'react'
import { HeaderMain } from '../components/HeaderMain'
import { WeekProduct } from '../components/WeekProduct'
import { About } from '../components/About'
import { Comments } from '../components/Comments'
import { Contacts } from '../components/Contacts'

export const Home: FC = () => {
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
