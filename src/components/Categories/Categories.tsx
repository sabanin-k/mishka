import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'

export const Categories: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.greenContiner}>
                <div className={styles.interior}>
                    <Link to='/' className={styles.link}>
                        <p className={styles.p}>Предметы</p>
                        <p className={styles.p}>интерьера</p>
                    </Link>
                    <div className={styles.interiorImage}></div>
                </div>
                <div className={styles.toys}>
                    <Link to='/' className={styles.link}>
                        <p className={styles.p}>Детские</p>
                        <p className={styles.p}>игрушки</p>
                    </Link>
                    <div className={styles.toysImage}></div>
                </div>
            </div>
        </div>
    )
}
