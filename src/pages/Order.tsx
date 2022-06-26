import { FC } from 'react'
import { Header } from '../components/Header'
import { OrderForm } from '../components/OrderForm'
import WaveDivider from '../components/WaveDivider'

export const Order: FC = () => {
    return (
        <>
            <Header text='Вязание на заказ' />
            <WaveDivider marginTop={-10} />
            <OrderForm />
        </>
    )
}
