import { FC } from 'react'
import { Categories } from '../Categories'
import { WaveDivider } from '../WaveDivider'
import styles from './HeaderMain.module.scss'

export const HeaderMain: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>
                        <span>Милые штуки</span>
                        <span> ручной </span>
                        <span>работы для дома</span>
                    </h1>
                </div>
            </header>
            <Categories />
            <WaveDivider marginTop={-22} />
        </>
    )
}
