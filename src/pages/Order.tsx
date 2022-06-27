import { FC } from 'react'
import { Header } from '../components/Header'
import { WaveDivider } from '../components/WaveDivider'
import { OrderForm } from '../components/OrderForm'

export const Order: FC = () => {
    return (
        <>
            <Header text='Вязание на заказ' />
            <WaveDivider marginTop={-10} />
            <OrderForm />
        </>
    )
}
