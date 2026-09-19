"use client";

import Header from "@/components/header";
import SideButton from "@/components/sideButtons";
import Link from "next/link";
import Diamond from "@/components/diamonds";
import { useState } from "react";

export default function SelectPage() {
  const [showDiamond, setShowDiamond] = useState(false);

  return (
    
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <div className="absolute left-10 top-24">
        <h1 className="text-[16px] font-semibold uppercase">
          A.I. Analysis
        </h1>

        <p className="mt-3 text-[12px] uppercase leading-[20px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  

  <div className="relative grid h-[280px] w-[280px] grid-cols-3 grid-rows-3 place-items-center">
        <Diamond
  className={`pointer-events-none absolute h-[470px] w-[470px]
    transition-opacity duration-300
    ${showDiamond ? "opacity-100" : "opacity-0"}`}
 />
  <div className="col-start-2 row-start-1 z-10 h-[125px] w-[125px] rotate-45 bg-[#D9D9D9] transition-transform duration-300 hover:scale-110"
  onMouseEnter={() => setShowDiamond(true)}
onMouseLeave={() => setShowDiamond(false)}>
  <Link href="/summary"> 
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
     <p className="text-[14px] font-semibold uppercase">
      Demographics
    </p>
    </div>
  </Link>
</div>
<div className="col-start-2 row-start-3 z-10 h-[125px] w-[125px] rotate-45 bg-[#F1F1F1] transition-transform duration-300 hover:scale-110 hover:bg-[#D9D9D9]"
  onMouseEnter={() => setShowDiamond(true)}
  onMouseLeave={() => setShowDiamond(false)}>
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-[14px] font-semibold uppercase">
      Weather
    </p>
  </div>
</div>
<div className="col-start-1 row-start-2 z-10 h-[125px] w-[125px] rotate-45 bg-[#F1F1F1] transition-transform duration-300 hover:scale-110 hover:bg-[#D9D9D9]"
  onMouseEnter={() => setShowDiamond(true)}
  onMouseLeave={() => setShowDiamond(false)}>
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-center text-[14px] font-semibold uppercase">
      Cosmetic
      <br />
      Concerns
    </p>
  </div>
</div>
<div className="col-start-3 row-start-2 z-10 h-[125px] w-[125px] rotate-45 bg-[#F1F1F1] transition-transform duration-300 hover:scale-110 hover:bg-[#D9D9D9]"
  onMouseEnter={() => setShowDiamond(true)}
  onMouseLeave={() => setShowDiamond(false)}>
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-center text-[14px] font-semibold uppercase">
      Skin Type Details
    </p>
  </div>
</div>
</div>
</div>

      <div className="absolute bottom-8 left-8">
        <Link href="/result">
          <SideButton direction="left">Back</SideButton>
        </Link>
      </div>
      <Link href="/summary"> 
      <div className="absolute bottom-8 right-8">
          <SideButton direction="right">
            Get Summary
          </SideButton>
        </div>
        </Link>
    </main>
  );
}