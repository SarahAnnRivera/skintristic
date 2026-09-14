"use client";

import { useState } from "react";
import Header from "./header";
import Diamond from "./diamonds";
import SideButton from "./sideButtons";
import Link from "next/link";

export default function TitlePage() {
  const [hoverSide, setHoverSide] = useState(null);
  return (
     <main className="relative h-screen overflow-hidden">
      <Header />

      <h1 className="hero-fade absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 font-light tracking-[-0.07em] md:top-1/2">
  <span
    className={`block whitespace-nowrap text-[44px] leading-[46px] transition-transform duration-700 ease-in-out md:text-[100px] md:leading-[110px] ${
      hoverSide === "left"
        ? "translate-x-[65%]"
        : hoverSide === "right"
        ? "-translate-x-[65%]"
        : "translate-x-0"
    }`}
  >
    Sophisticated
  </span>

  <span
    className={`block text-center text-[44px] leading-[46px] transition-transform duration-700 ease-in-out md:text-[100px] md:leading-[110px] ${
      hoverSide === "left"
        ? "translate-x-[83%]"
        : hoverSide === "right"
        ? "-translate-x-[83%]"
        : "translate-x-0"
    }`}
  >
    skincare
  </span>
</h1>
      <p className="absolute bottom-8 left-8 w-[316px] text-xsm font-normal leading-6 uppercase hidden md:block">
  Skinstric developed an A.I. that creates a highly-personalised routine
  tailored to what your skin needs.
</p>
<p className="absolute left-1/2 top-[50%] w-[300px] -translate-x-1/2 text-center text-[13px] font-normal leading-5 text-[#A0A4AB] md:hidden">
  Skinstric developed an A.I. that creates a highly-personalised routine
  tailored to what your skin needs.
</p>
<Diamond
  className={`fixed left-[-250px] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 transition-opacity duration-300 md:block ${
    hoverSide === "right" ? "opacity-0" : "opacity-100"
  }`}
/>

<Diamond
  className={`fixed right-[-250px] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 transition-opacity duration-300 md:block ${
    hoverSide === "left" ? "opacity-0" : "opacity-100"
  }`}
/>

<div
   className={`hidden transition-opacity duration-300 md:block ${
    hoverSide === "right" ? "opacity-0" : "opacity-100"
  }`}
  onMouseEnter={() => setHoverSide("left")}
  onMouseLeave={() => setHoverSide(null)}
>
  <div className="absolute left-8 top-1/2 -translate-y-1/2">
    <SideButton direction="left">Discover A.I.</SideButton>
  </div>
</div>
<div
  className={`hidden transition-opacity duration-300 md:block ${
  hoverSide === "left" ? "opacity-0" : "opacity-100"
}`}
  onMouseEnter={() => setHoverSide("right")}
  onMouseLeave={() => setHoverSide(null)}
>
  <div className="absolute right-8 top-1/2 -translate-y-1/2">
    <Link href="/testing">
  <SideButton direction="right">Take Test</SideButton>
</Link>
  </div>
</div>
<div className="absolute top-[58%] left-1/2 flex -translate-x-1/2 items-center gap- md:hidden">
  <Link href="/testing">
  <div className="flex items-center gap-2">
    <span className="whitespace-nowrap text-sm font-semibold uppercase">
      Enter Experience
    </span>

    <SideButton direction="right" />
  </div>
</Link>

</div>
<div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 max-md:block">
  <Diamond className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2" />

  <Diamond className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2" />
</div>
    </main>
  );
}