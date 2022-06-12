import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={`${styles.desctopList} ${styles.list}`}>
                        <li className={styles.catalog}>
                            <Link to='/' className={styles.link}>
                                Каталог товаров
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                Вязание на заказ
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
                                <SearchIcon className={styles.searchIcon} width='18' height='19' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                <div className={styles.cart}>
                                    <CartIcon className={styles.cartIcon} width='22' />
                                    Корзина: пока пуста
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
