import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: "Blog CtrlDev",
  description: "Aqui falamos sobre desenvolvimento web!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} background transition-colors duration-300 flex flex-col min-h-screen justify-between`}
      >
        <Providers>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Header/>
            {children}
            <Footer/>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
