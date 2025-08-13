import Image from 'next/image'
import React from 'react'
import ArticlesNav from './ArticlesNav'

const Articles = () => {
  return (
    <div className="max-w-[1400px] w-[90vw] mx-auto">
        <ArticlesNav/>
        <div className="my-24">

            <div className="flex gap-8 mb-16">
                <div className="relative">
                    <div className="overflow-hidden rounded-xl cursor-pointer group">
                        <Image src='/frontend.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 group-hover:scale-105 object-cover'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden rounded-xl cursor-pointer group">
                        <Image src='/blog-cover-2.png' alt='Capa do post Backend' width={1480} height={986} className='transition-transform duration-300 group-hover:scale-105 object-cover'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-8">
                <div className="relative">
                    <div className="overflow-hidden rounded-xl cursor-pointer group">
                        <Image src='/blog-cover-3.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 group-hover:scale-105 aspect-square object-cover'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden rounded-xl cursor-pointer group">
                        <Image src='/blog-cover-4.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 group-hover:scale-105 aspect-square object-cover'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden rounded-xl cursor-pointer group">
                        <Image src='/blog-cover-5.jpg' alt='Capa do post Frontend' width={1480} height={986} className='transition-transform duration-300 group-hover:scale-105 aspect-square object-cover'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained </p>
                        <span className='text-blog-sec text-sm'>12 de agosto, 2025</span>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center my-12">
                <button className='button'>Veja Mais</button>
            </div>
        </div>
    </div>
  )
}

export default Articles