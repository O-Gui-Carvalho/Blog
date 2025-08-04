import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt='Logo Blog' width={50} height={50}/>
          <h1 className={styles.logoText}>Blog CtrlDev</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, omnis nihil excepturi incidunt nemo quaerat quis. Quod maiores ipsum excepturi reiciendis! Perspiciatis est culpa voluptatum quaerat quasi dicta rerum unde!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='Facebook Logo' width={18} height={18}/>
          <Image src="/instagram.png" alt='Instagram Logo' width={18} height={18}/>
          <Image src="/tiktok.png" alt='Tiktok Logo' width={18} height={18}/>
          <Image src="/youtube.png" alt='Youtube Logo' width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer