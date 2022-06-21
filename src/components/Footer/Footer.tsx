import { FC } from 'react'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.logo}></div>
                <ul className={styles.ul}>
                    <li className={styles.inst}></li>
                    <li className={styles.fb}></li>
                    <li className={styles.twit}></li>
                </ul>
                <div>
                    <span className={styles.span}>Разработано</span>
                    <div className={styles.academy}></div>
                </div>
            </div>
        </footer>
    )
}
