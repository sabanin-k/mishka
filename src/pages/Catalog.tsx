import { FC } from 'react'
import { Header } from '../components/Header'
import { WaveDivider } from '../components/WaveDivider'

export const Catalog: FC = () => {
    return (
        <>
            <Header text='Каталог товаров' />
            <WaveDivider marginTop={-10} />
        </>
    )
}
