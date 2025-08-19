import Image from 'next/image'
import React from 'react'
import ArticlesNav from './ArticlesNav'
import BlogCard from './BlogCardTeste'

async function getPosts(){
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });
    if(!res.ok) throw new Error("Não foi possivel encontrar os Posts!");
    return res.json();
}

export default async function Articles() {
    const posts = await getPosts();
  return (
    <div className="max-w-[1400px] w-[90vw] mx-auto">
        <ArticlesNav/>
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-16 my-24">
            {posts.map((post) => (
                <BlogCard           
                    key={post.id}
                    title={post.title}
                    date={new Date(post.createdAt).toLocaleDateString("pt-BR")}
                    img={post.image}
                    cat={post.category?.name}
                    catLink={`/category/${post.category?.name}`}
                />
            ))}
        </div>
    </div>
  )
}