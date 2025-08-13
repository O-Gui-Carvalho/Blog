import React from 'react'

const ArticlesNav = () => {
  return (
    <nav className='block overflow-x-auto'>
        <ul className='flex gap-8 text-2xl text-blog-sec max-w-xl'>
            <li><a href="/" className="text-[#6C8793] text-xl font-medium hover:text-[#f2f2f2] transition-colors duration-300">Recentes</a></li>
            <li><a href="" className="text-xl font-light hover:text-[#f2f2f2] transition-colors duration-300">Design</a></li>
            <li><a href="" className="text-xl font-light hover:text-[#f2f2f2] transition-colors duration-300">Programação</a></li>
            <li><a href="" className="text-xl font-light hover:text-[#f2f2f2] transition-colors duration-300">Web</a></li>
            <li><a href="" className="text-xl font-light hover:text-[#f2f2f2] transition-colors duration-300">Jogos</a></li>
        </ul>
    </nav>
  )
}

export default ArticlesNav