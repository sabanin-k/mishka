import { FC } from 'react'
import Button from '../common/Button'
import GMap from '../Map'
import styles from './Contacts.module.scss'

export const Contacts: FC = () => {
    const handleClick = () => {
        console.log('Напишите нам has been pressed');        
    }

    return (
        <section>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.h2}>Контакты</h2>
                    <div className={styles.flag}></div>
                </header>
                <div className={styles.contacts}>
                    <div className={styles.grid}>
                        <span>e-mail:</span>
                        <span className={styles.underline}>info@mimimishkashop.ru</span>
                    </div>
                    <div className={styles.grid}>
                        <span>адрес:</span>
                        <span>
                            г. Санкт-Петербург,<br />
                            ул. Большая Конюшенная,<br />
                            д. 19/8, офис 101
                        </span>
                    </div>
                </div>
                <div className={styles.map}>
                    <GMap />
                </div>
                <div className={styles.button}>
                    <Button text='Напишите нам' handleClick={handleClick} />
                </div>
            </div>
        </section>
    )
}
