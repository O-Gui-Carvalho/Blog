import Image from 'next/image'
import React from 'react'
import ArticlesNav from './ArticlesNav'

const Articles = () => {
  return (
    <div className="max-w-[1400px] w-[90vw] mx-auto">
        <ArticlesNav/>
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-16 my-24">
            <article className='col-span-2 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/frontend.jpg' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>

            <article className='col-start-3 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/blog-cover-2.png' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>

            <article className='row-start-2 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/blog-cover-3.jpg' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>

            <article className='row-start-2 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/blog-cover-4.jpg' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>

            <article className='row-start-2 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/blog-cover-5.jpg' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>

            <article className='row-start-3 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/blog-cover-6.jpg' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>

            <article className='col-span-2 row-start-3 group relative flex flex-col justify-start cursor-pointer'>
                <div>
                    <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                        <Image loading='lazy' src='/blog-cover-7.jpg' alt='How to Develop a Healthcare App: Build Secure & Compliant Medical Apps' width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Front-End</a>
                            <a href="" className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#F2F2F240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>Web</a>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start px-1">
                        <a href="/">
                            <h2 className='text-blog text-2xl'>Website redesign services: strategy, process, and cost explained</h2>
                        </a>
                    </div>
                </div>
                <p className='mt-2 px-1 text-blog-sec'>12 de agosto, 2025</p>
            </article>
            
        </div>
    </div>
  )
}

export default Articles