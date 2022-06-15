import { FC } from 'react'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Милые штуки ручной работы для дома</h1>
            </div>
        </header>
    )
}
