import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex justify-between items-center max-w-[1400px] w-[90vw] mx-auto">
        <div className='flex flex-col flex-1/2 gap-8 mb-32'>
            <span className='text-blog text-5xl'>Assine nossa newsletter</span>
            <span className='text-blog-sec text-sm'>Uma vez por mês enviaremos atualizações do nosso blog</span>
        </div>
        <input type="email" className='w-full flex-1/2 border-b-[#083045] border-b-1'/>
    </div>
  )
}

export default Subscribe