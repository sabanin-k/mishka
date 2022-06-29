import { FC } from 'react'
import { Catalog } from '../components/Catalog'
import { Header } from '../components/common/Header'
import { WaveDivider } from '../components/common/WaveDivider'

export const CatalogPage: FC = () => {
    return (
        <>
            <Header text='Каталог товаров' />
            <WaveDivider marginTop={-10} />
            <Catalog />
        </>
    )
}
