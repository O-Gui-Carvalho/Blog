import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2] dark:bg-[#00111A] text-[#00111A] dark:text-[#F2F2F2] transition-all duration-300">
      <div className="max-w-3xl text-start space-y-10">
        <p className="text-2xl text-[#576B75] dark:text-[#B6C2C9]">Blog CtrlDev</p>
        <h1 className="text-6xl">Aqui falamos de tudo, desde que tenha código!</h1>
      </div>
    </div>
  );
}
