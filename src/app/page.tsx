"use client"
import { useState } from "react";

export default function Home() {



const heading:string="Deployment Errors On Vercel"
const text:string="please Share , Like and Subscribe My Youtube Channel Code With Or Without AI"

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 justify-center text-center bg-blue-500">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
        {heading}
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {text}
      </h3>
    </div>
  );
}
``