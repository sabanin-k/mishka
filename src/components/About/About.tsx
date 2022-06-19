import { FC } from 'react'
import styles from './About.module.scss'

export const About: FC = () => {
    return (
        <section className={styles.section}>
            <header>
                <h2 className={styles.h2}>Коротко о нас:</h2>
            </header>
            <div>
                <ul className={styles.list}>
                    <li>
                        <p className={styles.eco}>Экологически<br/>чистые материалы</p>
                    </li>
                    <li>
                        <p className={styles.scan}>Скандинавский стиль<br/>по российской цене</p>
                    </li>
                    <li>
                        <p className={styles.likes}>Увеличивает лайки<br/>на фотографиях</p>
                    </li>
                    <li>
                        <p className={styles.handmade}>Связано вручную с<br/>любовью и умилением</p>
                    </li>
                    <li>
                        <p className={styles.local}>Поддержка отечественного<br/>производителя</p>
                    </li>
                    <li>
                        <p className={styles.package}>Поставляется в<br/>подарочной упаковке</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
