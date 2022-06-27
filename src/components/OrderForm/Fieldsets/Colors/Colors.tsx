import { FC } from 'react'
import styles from './Colors.module.scss'

export const Colors: FC = () => {
    return (
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
    )
}
