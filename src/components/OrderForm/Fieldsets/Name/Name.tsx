import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './Name.module.scss'

export const Name: FC = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        firstName: yup.string().required('Обязательное поле'),
        lastName: yup.string().required('Обязательное поле'),
        tel: yup.string().matches(phoneRegExp, 'Неправильный номер').required('Обязательное поле')
    }).required()
    const { register,
        // handleSubmit,
        formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <fieldset className={styles.fieldset}>
            <div className={`${styles.container} ${styles.textContainer}`}>
                <div className={styles.legendWrapper}>
                    <legend className={styles.legend}>ФИО</legend>
                    <span className={styles.greenDivider}></span>
                </div>
                <div className={styles.fullname}>
                    <div>
                        <label className={styles.nameLabel}>
                            Имя:
                            <input className={styles.inputText}
                                placeholder='Введите Ваше имя*'
                                {...register('firstName')} />
                        </label>
                        {errors?.firstName
                            && <p className={styles.error}>
                                {errors.firstName.message?.toString()}
                            </p>
                        }
                    </div>
                    <div>
                        <label className={styles.nameLabel}>
                            Фамилия:
                            <input className={styles.inputText}
                                placeholder='Введите Вашу фамилию*'
                                {...register('lastName')} />
                        </label>
                        {errors?.lastName
                            && <p className={styles.error}>
                                {errors.lastName.message?.toString()}
                            </p>
                        }
                    </div>
                    <div>
                        <label className={styles.nameLabel}>
                            Отчество:
                            <input className={styles.inputText}
                                placeholder='Отчество, если желаете' />
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    )
}
