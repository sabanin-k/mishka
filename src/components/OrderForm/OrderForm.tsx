import { FC } from 'react'
import styles from './OrderForm.module.scss'

export const OrderForm: FC = () => {
    return (
        <form>
            <div className={styles.container}>
                <p className={styles.p}>
                    Мы будем рады воплотить в жизнь ваши пожелания!
                    Заполните простую форму заказа и мы свяжемся с вами,
                    чтобы уточнить детали.
                </p>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Тип</legend>
                    <div className={styles.radioButtons}>
                        <div className={styles.radioButton}>
                            <label className={styles.label}>
                                <input className={`${styles.input} ${styles.visuallyHidden}`}
                                    type="radio" name="type" checked />
                                <span className={styles.radio} />
                                <span className={styles.labelText}>Аксессуар для интерьера</span>                                
                            </label>
                        </div>
                        <div className={styles.radioButton}>
                            <label className={styles.label}>
                                <input className={`${styles.input} ${styles.visuallyHidden}`}
                                    type="radio" name="type" />
                                <span className={styles.radio} />
                                <span className={styles.labelText}>Детская игрушка</span>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}
