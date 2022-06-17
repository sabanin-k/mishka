import { FC } from 'react'
import styles from './Button.module.scss'

interface Props {
    handleClick: () => void
    text: string
}

export const Button: FC<Props> = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick} className={styles.button}>
            <p className={styles.text}>{text}</p>
        </button>
    )
}
