import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <Link to='/' className={styles.navItem}>
                                Каталог товаров
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.navItem}>
                                Вязание на заказ
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/' className={`${styles.navItem} ${styles.navDesktopItem}`}>
                                Новые поступления
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={`${styles.navItem} ${styles.navDesktopItem}`}>
                                Распродажа
                            </Link>
                        </li> */}
                    </ul>
                </nav>

            </div>
        </header>
    )
}
