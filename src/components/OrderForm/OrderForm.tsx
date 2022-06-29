import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Accessories } from './Fieldsets/Accessories'
import { Colors } from './Fieldsets/Colors'
import { Name } from './Fieldsets/Name'
import { Contacts } from './Fieldsets/Contacts'
import { Comment } from './Fieldsets/Comment'
import { Button } from '../common/Button'
import styles from './OrderForm.module.scss'

export const OrderForm: FC = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        firstName: yup.string().required('Обязательное поле'),
        lastName: yup.string().required('Обязательное поле'),
        tel: yup.string().matches(phoneRegExp, 'Неправильный номер').required('Обязательное поле')
    }).required()
    const { 
        // register,
        handleSubmit,
        formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => console.log(data);
    const handleClick = () => {
        console.log('Отправить заказ');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <p className={styles.p}>
                    Мы будем рады воплотить в жизнь ваши пожелания!
                    Заполните простую форму заказа и мы свяжемся с вами,
                    чтобы уточнить детали.
                </p>
            </div>
            <Accessories />
            <Colors />
            <Name />
            <Contacts />
            <Comment />
            <div className={`${styles.container} ${styles.textContainer}`}>
                <div className={styles.bottomWrapper}>
                    <div className={styles.bottomButton}>
                        <Button text='Отправить заказ' handleClick={handleClick} />
                    </div>
                    <span className={styles.bottomSpan}>*Поля обязательны для заполнения</span>
                </div>
            </div>
        </form>
    )
}
