import { FC } from 'react'
import { Button } from '../../common/Button';
import styles from './Comments.module.scss'

export const Comments: FC = () => {
    const handleClick = () => {
        console.log('Написать has been pressed');
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <header>
                        <h2 className={styles.h2}>Отзывы</h2>
                    </header>
                    <div>
                        <p className={styles.p}>
                            Я молодая мама, но всё равно фотографии
                            не набирали и близко такого количества лайков,
                            как у популярных инстамамочек. В отчаянии,
                            я накупила аксессуаров и игрушек в Мишке,
                            и мои фотографии сразу стали более стильными,
                            а также набирают больше лайков!
                        </p>
                    </div>
                    <div className={styles.authorArrows}>
                        <div className={styles.author}>
                            <p className={styles.name}>Анастасия Красильникова</p>
                            <span className={styles.email}>@misssssiskras</span>
                        </div>
                        <div className={styles.arrows}>
                            <button className={styles.leftArrow}>Left</button>
                            <button>Right</button>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button text='Написать' handleClick={handleClick} />
                </div>
            </div>
                <div className={styles.zigzig}></div>
        </section>
    )
}
