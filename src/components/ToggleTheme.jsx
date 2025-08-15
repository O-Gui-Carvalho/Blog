'use client'

import React from 'react'
import { useTheme } from 'next-themes';
import { PiSunThin, PiMoonThin } from "react-icons/pi";


const ToogleTheme = () => {
  const {theme, setTheme} = useTheme();

  return (
    <div>
      <button className="group rounded-full w-[40px] h-[40px] border-0 bg-[#f2f2f2] dark:bg-[#00111A] flex items-center justify-center cursor-pointer hover:bg-[#00111A] dark:hover:bg-[#f2f2f2] transition-all duration-300" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <PiMoonThin className='absolute h-6 w-6 group-hover:text-white dark:group-hover:text-black rotate-0 scale-100 dark:-rotate-90 dark:scale-0'/>
        <PiSunThin className='absolute h-6 w-6 group-hover:text-white dark:group-hover:text-black rotate-90 scale-0 dark:-rotate-0 dark:scale-100'/>
      </button>
    </div>
  )
}

export default ToogleTheme;