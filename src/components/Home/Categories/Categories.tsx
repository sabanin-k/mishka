import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'

export const Categories: FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.greenContiner}>
                <Link to='/' className={styles.interior}>
                    <div>
                        <p className={styles.p}>Предметы</p>
                        <p className={styles.p}>интерьера</p>
                    </div>
                    <div className={styles.interiorImage}></div>
                </Link>
                <Link to='/' className={styles.toys}>
                    <div>
                        <p className={styles.p}>Детские</p>
                        <p className={styles.p}>игрушки</p>
                    </div>
                    <div className={styles.toysImage}></div>
                </Link>
            </div>
        </section>
    )
}
