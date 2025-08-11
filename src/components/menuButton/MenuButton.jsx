'use client'

import React, { useState } from 'react'
import styles from './menuButton.module.css'
import {AnimatePresence} from 'framer-motion'
import Nav from './nav/Nav'


const MenuButton = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
        <div onClick={() => {setIsActive(!isActive)}} className={`${styles.button} bg-[#F2F2F2] dark:bg-[#00111A] hover:bg-[#00111A] dark:hover:bg-[#F2F2F2] group`}>
          <div className={`${styles.burger} before:bg-[#083045] after:bg-[#083045] dark:before:bg-[#F2F2F2] dark:after:bg-[#F2F2F2] group-hover:before:bg-[#F2F2F2] group-hover:after:bg-[#F2F2F2] dark:group-hover:before:bg-[#083045] dark:group-hover:after:bg-[#083045] ${isActive ? styles.burgerActive : ''}`}></div>
        </div>

        <AnimatePresence mode='wait'>
          {isActive && <Nav/>}
        </AnimatePresence>
    </>
  )
}

export default MenuButton