import Articles from "@/components/Articles";
import Subscribe from "@/components/Subscribe";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Teste from "@/components/Teste";

export default async function Home() {

  return (
    <main className="min-h-screen pt-56 max-w-[1400px] w-[90vw] mx-auto background transition-colors duration-300">
      <div className="text-start space-y-5 mb-24">
        <p className="text-2xl text-blog-sec">Blog CtrlDev</p>
        <h1 className="text-6xl text-blog max-w-[900px]">Aqui falamos sobre desenvolvimento de sites.</h1>
      </div>
      <Teste/>
      <Subscribe/>
    </main>
  );
};