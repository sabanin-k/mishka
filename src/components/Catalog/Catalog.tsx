import { FC } from 'react'
import desktopImage1 from '../../assets/jpg/photo-1-desktop.jpg'
import mobileImage1 from '../../assets/jpg/photo-1-mobile.jpg'
import tabletImage1 from '../../assets/jpg/photo-1-tablet.jpg'
import desktopImage2 from '../../assets/jpg/photo-2-desktop.jpg'
import mobileImage2 from '../../assets/jpg/photo-2-mobile.jpg'
import tabletImage2 from '../../assets/jpg/photo-2-tablet.jpg'
import desktopImage3 from '../../assets/jpg/photo-3-desktop.jpg'
import mobileImage3 from '../../assets/jpg/photo-3-mobile.jpg'
import tabletImage3 from '../../assets/jpg/photo-3-tablet.jpg'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { Button } from '../common/Button'
import { ProductCard } from './ProductCard'
import styles from './Catalog.module.scss'

export const Catalog: FC = () => {
    const { isDesktop, isTablet, isMobile } = useMatchMedia()

    const handleClick = () => {
        console.log('Сделать заказ');        
    }

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
                <div className={styles.videoWrapper}>
                    <div className={styles.videoImg}></div>
                    <div className={styles.videoDesc}>
                        <div>
                            <div className={styles.cameraIcon} />
                            <h3 className={styles.h3}>Процесс производства</h3>
                        </div>
                        <div>
                            <p>
                                По просьбам наших любимых фолловеров
                                мы сняли для вас подробное видео о том,
                                как появляются наши товары.
                            </p>
                        </div>
                        <div className={styles.button}>
                            <Button text='Сделать заказ' handleClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
