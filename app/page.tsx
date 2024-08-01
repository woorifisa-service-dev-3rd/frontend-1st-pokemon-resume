// app/page.tsx
"use client";

import Image from "next/image";
import { atom, useRecoilState } from "recoil";
<<<<<<< HEAD
import { Button, Input } from "antd";
import { upload, getimg } from "@/lib/utils/storage";
import { useRef, useState } from "react";
=======
import { Button } from "antd";
import MainContainer from "@/ui/components/main/MainContainer";
>>>>>>> 5c604c62700ac6113fd4eeb7e3edfb824588434a

// Define Recoil atoms for state management
const textState = atom<string>({
  key: "textState",
  default: "감자감자야",
});

export const textArea = atom<string>({
<<<<<<< HEAD
  key: 'textArea',
  default: "나는 구황작물"
=======
  key: "1",
  default: "나는 구황작물",
>>>>>>> 5c604c62700ac6113fd4eeb7e3edfb824588434a
});

export default function Home() {

  const [text, setText] = useRecoilState(textState);
  const [title, setTitle] = useRecoilState(textArea);
<<<<<<< HEAD
  const [file, setFile] = useState<File | null>(null);

  const image = useRef();

  // Handler for file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

// 업로드 구현
  const handleUpload = () => {
    if (file) {
      upload(file);
    } else {
      console.error("No file selected");
    }
  };

  const handleGetimg = async () => {
      const url = await getimg();
      image.current.src = url;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          ㅁㄹㅇㅁㅇㄴㄹ&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <Button onClick={() => setText('홀리몰리 감자감자')}>{text}</Button>
        <Button onClick={() => setTitle('홀리몰리 고구마몰리')}>{title}</Button>
        
        {/* 업로드 */}
        <Input type="file" onChange={handleFileChange} />
        <Button onClick={handleUpload} disabled={!file}>Upload File</Button>

        <Button onClick={handleGetimg}>GET IMG File</Button>
        <img src="" ref={image}></img>
        

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={() => setText("뿨킹감자")}
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
=======

  return (
    <div className="flex flex-row w-screen h-screen relative" style={{ padding: "15vh 15vw" }}>
      <Image src="/images/스크린샷 2024-08-01 오후 1.52.25.png" alt="background" layout="fill" />
      <MainContainer />
      {/* <div
        className="z-10 w-full h-full"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/Img_mainBackground.png"
          width={500}
          height={500}
          alt={"메인_배경"}
          style={{
            minWidth: "70vw",
            minHeight: "70vh",
            borderRadius: "20px",
          }}
        />
      </div> */}
    </div>
>>>>>>> 5c604c62700ac6113fd4eeb7e3edfb824588434a
  );
}
