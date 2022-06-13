import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header: FC = () => {
    const [isActiveMenu, setActiveMenu] = useState(false)
    const handleSetMenuActive = () => {
        setActiveMenu(!isActiveMenu)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={`${styles.leftNav} ${isActiveMenu && styles.visuallyHidden}`}>
                        <li className={styles.catalog}>
                            <Link to='/' className={styles.link}>
                                <span className={styles.span}>Каталог товаров</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                <span className={styles.span}>Вязание на заказ</span>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.desktopOnly}>
                        <Link to='/' className={styles.link}>
                            <span className={styles.span}>Новые поступления</span>
                        </Link>
                        <Link to='/' className={styles.link}>
                            <span className={styles.span}>Распродажа</span>
                        </Link>
                    </div>
                    <div className={styles.logoContainer}>
                        <Link to='/' className={styles.link} >
                            <div className={styles.logo}></div>
                        </Link>
                    </div>
                    <ul className={`${styles.rightNav} ${isActiveMenu && styles.visuallyHidden}`}>
                        <li>
                            <Link to='/' className={styles.link}>
                                <div className={styles.search}>
                                    <div className={styles.searchIcon}></div>
                                    <span className={`${styles.span} ${styles.searchSpan}`}>Поиск по сайту</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                <div className={styles.cart}>
                                    <div className={styles.cartIcon}></div>
                                    <span className={`${styles.span} ${styles.cartSpan}`}>Корзина: пока пуста</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.delivery}>
                        <span>Бесплатная доставка по России</span>
                    </div>
                    <button onClick={handleSetMenuActive} className={isActiveMenu ? styles.burgerMenu : styles.crossMenu}></button>
                </nav>
            </div>
        </header>
    )
}
