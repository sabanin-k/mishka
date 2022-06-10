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
                        <li>
                            <Link to='/' className={styles.link}>
                                Каталог товаров
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                Вязание на заказ
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link} >
                                <div className={styles.logo}></div>
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li>
                            <Link to='/' className={styles.link}>
                                <SearchIcon className={styles.searchIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={styles.link}>
                                <CartIcon />
                                Корзина: пока пуста
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
