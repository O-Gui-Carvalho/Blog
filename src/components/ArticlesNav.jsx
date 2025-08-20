import React from 'react'

const ArticlesNav = () => {
  return (
    <nav className='block overflow-x-auto'>
        <ul className='flex gap-8 text-2xl text-blog-sec max-w-xl'>
            <li><a href="/" className="link-active">Recentes</a></li>
            <li><a href="" className="link">Design</a></li>
            <li><a href="" className="link">Programação</a></li>
            <li><a href="" className="link">Web</a></li>
            <li><a href="" className="link">Jogos</a></li>
        </ul>
    </nav>
  )
}

export default ArticlesNav