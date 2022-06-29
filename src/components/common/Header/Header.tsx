import { FC } from 'react'
import styles from './Header.module.scss'

interface Props {
    text: string
}

export const Header: FC<Props> = ({ text }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.h1}>
                    <span>{text}</span>
                </h1>
            </div>
        </header>
    )
}
