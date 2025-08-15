import React from 'react'

const BlogCard = ({title, date, img, cat, catLink}) => {
  return (
    <article className='col-span-2 group relative flex flex-col justify-start cursor-pointer'>
        <div>
            <div className="relative h-[358px] overflow-hidden rounded-2xl xl:h-[442px]">
                <Image loading='lazy' src={img} alt={title} width={1480} height={986} className='aspect-square transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full'/>
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    <a href={catLink} className='bg-[#08304540] text-[#f2f2f2] py-1 px-4 border border-[#f2f2f240] rounded-full text-[12px] backdrop-blur-xl text-nowrap transition-colors duration-300 hover:bg-[#083045bf]'>{cat}</a>
                </div>
            </div>
            <div className="mt-6 flex flex-col items-start px-1">
                <a href="/">
                    <h2 className='text-blog text-2xl'>{title}</h2>
                </a>
            </div>
        </div>
        <p className='mt-2 px-1 text-blog-sec text-[12px]'>{date}</p>
    </article>
  )
}

export default BlogCard