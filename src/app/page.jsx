import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-56 max-w-[1400px] w-[90vw] mx-auto background transition-colors duration-300">
      <div className="text-start space-y-5 mb-24">
        <p className="text-2xl text-blog-sec">Blog CtrlDev</p>
        <h1 className="text-6xl text-blog">Aqui falamos sobre desenvolvimento de sites.</h1>
      </div>
      <div className="text-blog-sec max-w-xl flex items-center justify-between">
        <span>Recentes</span>
        <span>Design</span>
        <span>Programação</span>
        <span>Web</span>
        <span>Jogos</span>
      </div>
    </main>
  );
};