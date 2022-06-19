import { FC } from 'react'
import Button from '../common/Button'
import styles from './WeekProduct.module.scss'

export const WeekProduct: FC = () => {
    const handleClick = () => {
        console.log('button clicked');
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <header className={styles.header}>
                        <span className={styles.week}>Товар недели</span>
                        <h2 className={styles.h2}>Вязаные корзинки</h2>
                    </header>
                    <div>
                        <p className={styles.text}>
                            Экологически чистая пряжа, ручная работа.
                            Доступны в шести расцветках и трех размерах.
                        </p>
                    </div>
                    <div className={styles.specs}>
                        <div className={styles.specRow}>
                            <span>Цвет:</span>
                            <span>«Тиффани»/серый</span>
                        </div>
                        <div className={styles.specRow}>
                            <span>Диаметр:</span>
                            <span>25см</span>
                        </div>
                        <div className={styles.specRow}>
                            <span>Высота:</span>
                            <span>15см</span>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <p className={styles.priceText}>Цена: 990 руб.</p>
                    </div>
                    <div className={styles.button}>
                        <Button handleClick={handleClick} text={'Заказать'} />
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.image}></div>
                </div>
            </div>
            <div className={styles.zigzig}></div>
        </section>
    )
}
