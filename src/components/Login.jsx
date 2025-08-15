'use client'

import React from 'react'
import { PiUserThin } from "react-icons/pi";
import { AiOutlineLoading } from "react-icons/ai";
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {

  const {data: session, status} = useSession();


  if (status === "loading"){
    return (
      <button className='rounded-full w-[40px] h-[40px] border-0 bg-[#F2F2F2] dark:bg-[#00111A] flex items-center justify-center hover:bg-[#00111A] dark:hover:bg-[#f2f2f2] transition-all duration-300 group'>
        <AiOutlineLoading className='absolute h-5 w-5 group-hover:text-white dark:group-hover:text-black animate-spin'/>
      </button>
    )
  }

  if (!session){
    return (
      <button className='rounded-full w-[40px] h-[40px] border-0 bg-[#F2F2F2] dark:bg-[#00111A] flex items-center justify-center cursor-pointer hover:bg-[#00111A] dark:hover:bg-[#f2f2f2] transition-all duration-300 group' onClick={() => signIn("github")}>
        <PiUserThin className='absolute h-6 w-6 group-hover:text-white dark:group-hover:text-black'/>
      </button>
    )
  }

  return (
    <div>
        <button className='rounded-full w-[40px] h-[40px] border-0 bg-[#F2F2F2] dark:bg-[#00111A] flex items-center justify-center cursor-pointer hover:bg-[#00111A] dark:hover:bg-[#f2f2f2] transition-all duration-300 group' onClick={() => signOut()}>
            <Image src={session.user?.image || ''} alt={session.user?.name || ''} width={32} height={32} className='rounded-full'/>
        </button>
    </div>
  )
}

export default Login