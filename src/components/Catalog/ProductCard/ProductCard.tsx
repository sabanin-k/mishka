import { FC } from 'react'
import styles from './ProductCard.module.scss'

interface Props {
    img: string
    name: string
    description: string
    price: number
}

export const ProductCard: FC<Props> = ({ img, name, description, price }) => {
    return (
        <article className={styles.article}>
            <img src={img} alt={`Изображение ${name}`} 
                className={styles.img} />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
                <div>
                    <div className={styles.divider}></div>
                    <div className={styles.priceWrapper}>
                        <p className={styles.price}>{price} руб.</p>
                        <button className={styles.cart}></button>
                    </div>
                </div>
            </div>
        </article>
    )
}
