import React from 'react'

const Subscribe = () => {
  return (
    <div className="mx-auto m-32 flex w-full max-w-[1400px] gap-2 py-15">
      <div className="w-full grid grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <p className="text-blog text-5xl mb-4">Assine nossa newsletter</p>
          <span className='text-blog-sec'>Uma vez por mês enviaremos atualizações do nosso blog</span>
        </div>
        <form className='w-full' id='subscribe-form'>
          <div className="relative w-full max-w-none">
            <div>
              <input type="email" placeholder='Insira seu melhor email' name='email' className='transition-colors duration-300 w-full border-b border-[#08304540] hover:border-[#083045] dark:border-[#F2F2F240] dark:hover:border-[#F2F2F2] py-2 text-xl font-extralight !pr-12 outline-0'/>
            </div>
            <div className="absolute right-0 top-1/2 flex h-full -translate-y-1/2 items-center">
              <button className="h-auto cursor-pointer border-b border-[#08304500] hover:border-[#083045] dark:border-[#F2F2F200] dark:hover:border-[#F2F2F2] transition-colors duration-300 text-xl" type='submit'>Assinar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe