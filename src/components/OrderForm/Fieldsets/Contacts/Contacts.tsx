import { FC } from 'react'
import styles from './Contacts.module.scss'

export const Contacts: FC = () => {
    return (
        <fieldset className={`${styles.fieldset} ${styles.bgGrey}`}>
                <div className={`${styles.container} ${styles.textContainer}`}>
                    <div className={styles.legendWrapper}>
                        <legend className={styles.legend}>Тел</legend>
                        <span className={styles.greenDivider}></span>
                    </div>
                    <div className={styles.telWrapper}>
                        <label className={styles.label}>
                            <span></span>
                            <input type={"tel"} className={styles.inputTel}
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
                            <input type={"email"} className={styles.inputTel}
                                placeholder='Ваш Email*' />
                        </label>
                    </div>
                </div>
            </fieldset>
    )
}
