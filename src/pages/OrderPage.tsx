import { FC } from 'react'
import { Header } from '../components/common/Header'
import { WaveDivider } from '../components/common/WaveDivider'
import { OrderForm } from '../components/OrderForm'

export const OrderPage: FC = () => {
    return (
        <>
            <Header text='Вязание на заказ' />
            <WaveDivider marginTop={-10} />
            <OrderForm />
        </>
    )
}
