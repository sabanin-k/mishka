import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
    const [isActiveMenu, setActiveMenu] = useState(false)
    const handleSetMenuActive = () => {
        setActiveMenu(!isActiveMenu)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <ul className={`${styles.leftNav} ${isActiveMenu && styles.visuallyHidden}`}>
                    <li className={styles.catalog}>
                        <Link to='/catalog' className={styles.link}>
                            <span className={styles.span}>Каталог товаров</span>
                        </Link>
                    </li>
                    <li className={styles.knitting}>
                        <Link to='/order' className={styles.link}>
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
                                <span className={`${styles.span} ${styles.cartSpan}`}>Корзина: 1 товар</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className={styles.delivery}>
                    <span>Бесплатная доставка по России</span>
                </div>
                <button onClick={handleSetMenuActive} className={isActiveMenu ? styles.burgerMenu : styles.crossMenu}></button>
                {!isActiveMenu
                    && <>
                        <div className={styles.divider} style={{ top: '160px' }}></div>
                        <div className={styles.divider} style={{ top: '240px' }}></div>
                        <div className={styles.divider} style={{ top: '320px' }}></div>
                        <div className={styles.divider} style={{ top: '400px' }}></div>
                    </>
                }
            </div>
        </nav>
    )
}
