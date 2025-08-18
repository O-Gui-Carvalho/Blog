'use client'

import { useState } from "react"


const CreatePostPage = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        if(file){
            setImage(file)
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, category, image, content)
    }

  return (
    <main className='section-blog py-48'>
        <div className="">
            <h1 className='text-6xl'>Crie um novo post</h1>
            <form onSubmit={handleSubmit} className='form mt-16'>
                <div className="flex flex-col gap-4 text-xl">
                    <label htmlFor="title">Título</label>
                    <input id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Insira o título' className='border border-[#00011A40] dark:border-[#f2f2f240] p-2 rounded-md outline-none' required/>
                </div>
                <div className="flex flex-col gap-4 text-xl">
                    <label htmlFor="category">Categoria</label>
                    <input id='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Insira a categoria' className='border border-[#00011A40] dark:border-[#f2f2f240] p-2 rounded-md outline-none' required/>
                </div>
                <div className='flex flex-col gap-4 text-xl'>
                    <label htmlFor="image">Imagem</label>
                    <input type="file" accept="image/*" onChange={handleImage} id="image" className='border border-[#00011A40] dark:border-[#f2f2f240] p-2 rounded-md outline-none'/>
                    {preview && (
                        <img src={preview} alt="Preview" className="mt-3 w-64 h-32 object-cover rounded-md border"/>
                    )}
                </div>
                <div className="flex flex-col gap-4 text-xl">
                    <label htmlFor="content">Conteúdo</label>
                    <textarea name="" id='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder='Insita o conteúdo' className='border border-[#00011A40] dark:border-[#f2f2f240] p-2 rounded-md outline-none' required/>
                </div>
                <button className='button' type="submit">Enviar</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePostPage