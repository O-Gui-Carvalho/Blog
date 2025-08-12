import Image from 'next/image'
import React from 'react'

const Articles = () => {
  return (
    <div className="max-w-[1400px] w-[90vw] mx-auto">
        <div className="text-2xl text-blog-sec max-w-xl flex items-center justify-between gap-8">
            <span className="text-[#6C8793] text-xl font-medium">Recentes</span>
            <span className="text-xl font-light">Design</span>
            <span className="text-xl font-light">Programação</span>
            <span className="text-xl font-light">Web</span>
            <span className="text-xl font-light">Jogos</span>
        </div>
        <div className="my-24">

            <div className="flex gap-8 mb-16">
                <div className="">
                    <div className="overflow-hidden rounded-xl cursor-pointer">
                        <Image src='/frontend.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 hover:scale-105 object-cover'/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>

                <div className="">
                    <div className="overflow-hidden rounded-xl cursor-pointer">
                        <Image src='/blog-cover-2.png' alt='Capa do post Backend' width={1480} height={986} className='transition-transform duration-300 hover:scale-105 object-cover'/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-8">
                <div className="">
                    <div className="overflow-hidden rounded-xl cursor-pointer">
                        <Image src='/blog-cover-3.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 hover:scale-105 aspect-square object-cover'/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-hidden rounded-xl cursor-pointer">
                        <Image src='/blog-cover-4.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 hover:scale-105 aspect-square object-cover'/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-hidden rounded-xl cursor-pointer">
                        <Image src='/blog-cover-5.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 hover:scale-105 aspect-square object-cover'/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles