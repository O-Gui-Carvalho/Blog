import styles from './navLink.module.css'
import { motion } from 'framer-motion'
import { slide, scale } from '../anim'
import Link from 'next/link';

const NavLink = ({data, isActive, setSelectedIndicator}) => {
  const {title, href, index} = data;
    return (
    <motion.div className={styles.link} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial='initial' animate='enter' exit='exit'>
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}>
        </motion.div>
        <Link href={href}>{title}</Link>
    </motion.div>
  )
}

export default NavLink