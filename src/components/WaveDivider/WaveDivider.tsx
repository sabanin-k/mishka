import { FC } from 'react'
import styles from './WaveDivider.module.scss'

interface Props {
    marginTop: number
}

export const WaveDivider: FC<Props> = ({ marginTop }) => {
    return (
        <div className={styles.divider} style={{marginTop: `${marginTop}px`}}></div>
    )
}
