import { FC } from 'react'
import styles from './Comment.module.scss'

export const Comment: FC = () => {
    return (
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
    )
}
