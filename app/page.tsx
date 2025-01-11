"use client"

import Image from "next/image";
import Link from 'next/link';
import { saveAs } from "file-saver";

export default function Home() {

  const saveFile = () => {
    saveAs("/resume.pdf", "Ritik Soni - Resume.pdf");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >

      <main className="flex flex-col gap-8 row-start-2 items-center justify-center text-4xl">
        <div className="flex gap-8">
          Welcome to my <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          /> ecommerce store
        </div>
        <Link className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="/products">
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Checkout my products
        </Link>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer" onClick={saveFile}>
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Resume
        </div>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/soni-ritik/" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Linkedin
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://ritiksoni22.github.io/" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Portfolio website →
        </a>
      </footer >
    </div >
  );
}
