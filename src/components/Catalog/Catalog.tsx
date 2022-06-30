import { FC } from 'react'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { ProductCard } from './ProductCard'
import desktopImage1 from '../../assets/jpg/photo-1-desktop.jpg'
import desktopImage2 from '../../assets/jpg/photo-2-desktop.jpg'
import desktopImage3 from '../../assets/jpg/photo-3-desktop.jpg'
import tabletImage1 from '../../assets/jpg/photo-1-tablet.jpg'
import tabletImage2 from '../../assets/jpg/photo-2-tablet.jpg'
import tabletImage3 from '../../assets/jpg/photo-3-tablet.jpg'
import mobileImage1 from '../../assets/jpg/photo-1-mobile.jpg'
import mobileImage2 from '../../assets/jpg/photo-2-mobile.jpg'
import mobileImage3 from '../../assets/jpg/photo-3-mobile.jpg'
import styles from './Catalog.module.scss'

export const Catalog: FC = () => {
    const { isDesktop, isTablet, isMobile } = useMatchMedia()

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <ProductCard
                        img={`${(isDesktop && desktopImage1)
                            || (isTablet && tabletImage1)
                            || (isMobile && mobileImage1)}`}
                        name='Зайчик-попрыгайчик'
                        description='Рост 30 см, вес 200 г'
                        price={1200}
                    />
                    <ProductCard
                        img={`${(isDesktop && desktopImage2)
                            || (isTablet && tabletImage2)
                            || (isMobile && mobileImage2)}`}
                        name='Корзинка для белья'
                        description='Диаметр 15 см, высота 10 см'
                        price={690}
                    />
                    <ProductCard
                        img={`${(isDesktop && desktopImage3)
                            || (isTablet && tabletImage3)
                            || (isMobile && mobileImage3)}`}
                        name='Большая корзинка для игрушек'
                        description='Диаметр 30 см, высота 30 см'
                        price={1500}
                    />
                </div>
            </div>
        </section>
    )
}
