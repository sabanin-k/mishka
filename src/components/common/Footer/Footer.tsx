import { FC } from 'react'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}></div>
                <ul className={styles.ul}>
                    <li className={styles.inst}></li>
                    <li className={styles.fb}></li>
                    <li className={styles.twit}></li>
                </ul>
                <a href='https://htmlacademy.ru/' className={styles.develop} target={'_blank'} rel="noreferrer">
                    <span className={styles.span}>Разработано</span>
                    <div className={styles.academy}></div>
                </a>
            </div>
        </footer>
    )
}
