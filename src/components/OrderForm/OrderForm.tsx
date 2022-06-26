import { FC } from 'react'
import Button from '../common/Button'
import styles from './OrderForm.module.scss'

export const OrderForm: FC = () => {
    const handleClick = () => {
        console.log('Отправить заказ');        
    }

    return (
        <form>
            <div className={styles.container}>
                <p className={styles.p}>
                    Мы будем рады воплотить в жизнь ваши пожелания!
                    Заполните простую форму заказа и мы свяжемся с вами,
                    чтобы уточнить детали.
                </p>
            </div>
            <fieldset className={styles.fieldset}>
                <div className={styles.container}>
                    <div className={styles.legendWrapper}>
                        <legend className={styles.legend}>Тип</legend>
                        <span className={styles.greenDivider}></span>
                    </div>
                    <div className={styles.radioButtons}>
                        <div className={styles.radioButton}>
                            <label className={styles.label}>
                                <input className={`${styles.inputRadio} ${styles.visuallyHidden}`}
                                    type="radio" name="type" checked />
                                <span className={styles.radio} />
                                <span className={styles.labelText}>Аксессуар для интерьера</span>
                            </label>
                        </div>
                        <div className={styles.radioButton}>
                            <label className={styles.label}>
                                <input className={`${styles.inputRadio} ${styles.visuallyHidden}`}
                                    type="radio" name="type" />
                                <span className={styles.radio} />
                                <span className={styles.labelText}>Детская игрушка</span>
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className={`${styles.fieldset} ${styles.bgGrey}`}>
                <div className={styles.container}>
                    <div className={styles.legendWrapper}>
                        <legend className={styles.legend}>Цвет</legend>
                        <span className={styles.greenDivider}></span>
                    </div>
                    <div className={styles.colors}>
                        <div>
                            <label className={styles.label}>
                                <input className={`${styles.inputCheckbox} ${styles.visuallyHidden}`}
                                    type="checkbox" checked />
                                <span className={styles.checkbox} />
                                <span className={styles.labelText}>Белый</span>
                            </label>
                        </div>
                        <div>
                            <label className={styles.label}>
                                <input className={`${styles.inputCheckbox} ${styles.visuallyHidden}`}
                                    type="checkbox" checked />
                                <span className={styles.checkbox} />
                                <span className={styles.labelText}>Серый</span>
                            </label>
                        </div>
                        <div>
                            <label className={styles.label}>
                                <input className={`${styles.inputCheckbox} ${styles.visuallyHidden}`}
                                    type="checkbox" />
                                <span className={styles.checkbox} />
                                <span className={styles.labelText}>«Тиффани»</span>
                            </label>
                        </div>
                        <div>
                            <label className={styles.label}>
                                <input className={`${styles.inputCheckbox} ${styles.visuallyHidden}`}
                                    type="checkbox" />
                                <span className={styles.checkbox} />
                                <span className={styles.labelText}>Черный</span>
                            </label>
                        </div>
                        <div>
                            <label className={styles.label}>
                                <input className={`${styles.inputCheckbox} ${styles.visuallyHidden}`}
                                    type="checkbox" />
                                <span className={styles.checkbox} />
                                <span className={styles.labelText}>Розовый</span>
                            </label>
                        </div>
                        <div>
                            <label className={styles.label}>
                                <input className={`${styles.inputCheckbox} ${styles.visuallyHidden}`}
                                    type="checkbox" />
                                <span className={styles.checkbox} />
                                <span className={styles.labelText}>Оранжевый</span>
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
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
                                    placeholder='Введите Ваше имя*' />
                            </label>
                        </div>
                        <div>
                            <label className={styles.nameLabel}>
                                Фамилия:
                                <input className={styles.inputText}
                                    placeholder='Введите Вашу фамилию*' />
                            </label>
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
            <fieldset className={`${styles.fieldset} ${styles.bgGrey}`}>
                <div className={`${styles.container} ${styles.textContainer}`}>
                    <div className={styles.legendWrapper}>
                        <legend className={styles.legend}>Тел</legend>
                        <span className={styles.greenDivider}></span>
                    </div>
                    <div className={styles.telWrapper}>
                        <label className={styles.label}>
                            <span></span>
                            <input className={styles.inputTel}
                                placeholder='+7 ХХХ ХХ ХХ*' />
                        </label>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.emailContainer}`}>
                    <div className={styles.legendWrapper}>
                        <legend className={styles.legend}>Email</legend>
                        <span className={styles.greenDivider}></span>
                    </div>
                    <div className={styles.telWrapper}>
                        <label className={styles.label}>
                            <span></span>
                            <input className={styles.inputTel}
                                placeholder='Ваш Email*' />
                        </label>
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <div className={`${styles.container} ${styles.textContainer}`}>
                    <div className={styles.legendWrapper}>
                        <legend className={styles.legend}>Доп</legend>
                        <span className={styles.greenDivider}></span>
                    </div>
                    <div>
                        <textarea className={styles.textarea}
                            placeholder='Опишите все ваши пожелания к заказу' />
                    </div>
                </div>
            </fieldset>
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
