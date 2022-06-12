import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.leftNav}>
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
                    <div className={styles.logoContainer}>
                        <Link to='/' className={styles.link} >
                            <div className={styles.logo}></div>
                        </Link>
                    </div>
                    <ul className={styles.rightNav}>
                        <li>
                            <Link to='/' className={styles.link}>
                                <div className={styles.searchIcon}></div>
                                <span className={styles.searchSpan}>Поиск по сайту</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                <div className={styles.cart}>
                                    <div className={styles.cartIcon}></div>
                                    <span className={styles.cartSpan}>Корзина: пока пуста</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <button className={styles.burgerMenu}></button>
                </nav>
            </div>
        </header>
    )
}
