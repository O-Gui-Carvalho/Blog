import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

// Garanta Node.js runtime (Prisma não roda no Edge)
export const runtime = "nodejs";
// Não cachear (opcional)
export const revalidate = 0;

export default async function PostPage({ params }) {
  const { id } = await params;

  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    notFound();
  }

  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: { select: { name: true, image: true, id: true } },
      category: { select: { name: true } },
      comments: {
        include: {
          author: { select: { name: true, image: true } },
        },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="section-blog py-24 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

      {post.category?.name && (
        <span className="inline-block mb-6 px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full">
          {post.category.name}
        </span>
      )}

      {/* Use <img> para evitar precisar configurar domains do next/image por agora */}
      {post.image && (
        <div className="mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1480}
            height={986}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      )}

      <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
        <Markdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </Markdown>
      </article>

      <div className="flex items-center gap-4 mt-12">
        {post.author?.image && (
          <img
            src={post.author.image}
            alt={post.author.name || "Autor"}
            className="rounded-full w-12 h-12 object-cover"
          />
        )}
        <p className="text-lg">
          Escrito por <strong>{post.author?.name ?? "Autor"}</strong>
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl mb-4">Comentários</h2>
        {post.comments.length === 0 ? (
          <p className="text-gray-500">Nenhum comentário ainda.</p>
        ) : (
          <ul className="space-y-6">
            {post.comments.map((c) => (
              <li key={c.id} className="border-b pb-4">
                <div className="flex items-center gap-3 mb-2">
                  {c.author?.image && (
                    <img
                      src={c.author.image}
                      alt={c.author.name || "Usuário"}
                      className="rounded-full w-9 h-9 object-cover"
                    />
                  )}
                  <span className="font-semibold">{c.author?.name}</span>
                </div>
                <p>{c.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
