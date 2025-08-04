import Image from 'next/image'
import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='Post Banner' className={styles.image} fill/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2025 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste maiores, at ducimus deserunt quam pariatur rem. Tempore mollitia nemo magni, earum fuga quas, porro, laboriosam dolorum natus libero rerum!
            </p>
            <Link className={styles.link} href="/">Read More</Link>
        </div>
    </div>
  )
}

export default Card