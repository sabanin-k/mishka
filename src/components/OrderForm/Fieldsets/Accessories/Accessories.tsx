import { FC } from 'react'
import styles from './Accessories.module.scss'

export const Accessories: FC = () => {
    return (
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
                                type="radio" name="type" />
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
    )
}
