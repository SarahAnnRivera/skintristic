"use client";

import Header from "@/components/header";
import Diamond from "@/components/diamonds";
import Link from "next/link";
import SideButton from "../../components/sideButtons";
import { IoApertureOutline, IoImageOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { submitPhaseTwo } from "@/lib/api";

export default function ResultPage() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

   const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = async () => {
  setSelectedImage(reader.result);

  try {
    const data = await submitPhaseTwo(reader.result);
    localStorage.setItem(
  "analysisData",
  JSON.stringify(data.data)
);
console.log("PHASE TWO RESPONSE:", data);
  } catch (error) {
    console.error("PHASE TWO ERROR:", error);
  }
};

  reader.readAsDataURL(file);
};


  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <p className="absolute left-10 top-20 text-sm font-semibold uppercase">
        To Start Analysis
      </p>
      {selectedImage && (
  <div className="absolute right-8 top-20 z-50">
    <p className="mb-2 text-[12px] font-semibold uppercase">
      Preview
    </p>

    <img
      src={selectedImage}
      alt="Selected preview"
      className="h-[120px] w-[120px] object-cover"
    />
  </div>
)}
      <div className="absolute left-[calc(25%+20px)] top-1/2 -translate-x-1/2 -translate-y-1/2">
  <Diamond className="absolute h-[300px] w-[300px] rotate-[8deg] animate-diamond-fast" />
  <Diamond className="absolute h-[300px] w-[300px] rotate-[22deg] animate-diamond-medium" />
  <Diamond className="h-[290px] w-[290px] animate-diamond-slow" />
  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
  <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#1A1B1C]">
    <Link href="/capture">
    <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-[#1A1B1C]">
      <IoApertureOutline className="h-[54px] w-[54px]" />
    </div></Link>
    
  </div>
</div>
<div className="absolute left-1/2 top-1/2 z-20 ml-[42px] -mt-[42px]">
  <div className="relative h-[55px] w-[115px]">
    <div className="absolute bottom-0 left-0 h-px w-[55px] origin-left -rotate-45 bg-[#1A1B1C]" />

    <p className="absolute left-[58px] top-0 whitespace-nowrap text-[12px] leading-[18px]">
      ALLOW A.I.
      <br />
      TO SCAN YOUR FACE
    </p>
  </div>
</div>
</div>
<div className="absolute right-[calc(25%+20px)] top-1/2 translate-x-1/2 -translate-y-1/2">
  <Diamond className="absolute h-[300px] w-[300px] rotate-[8deg] animate-diamond-fast" />
  <Diamond className="absolute h-[300px] w-[300px] rotate-[22deg] animate-diamond-medium" />
  <Diamond className="h-[290px] w-[290px] animate-diamond-slow" />
  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
  <div
  onClick={() => { fileInputRef.current?.click();}}
  className="flex h-[76px] w-[76px] cursor-pointer items-center justify-center rounded-full border border-[#1A1B1C]"
>
  <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-[#1A1B1C]">
    <IoImageOutline className="h-[54px] w-[54px]" />
  </div>
</div>
</div>
<div className="absolute left-1/2 top-1/2 z-20 -ml-[150px] mt-[30px]">
  <div className="relative h-[65px] w-[135px]">
    <div className="absolute right-0 top-0 h-px w-[55px] origin-right -rotate-45 bg-[#1A1B1C]" />

    <p className="absolute bottom-0 right-[58px] whitespace-nowrap text-right text-[12px] leading-[18px]">
      ALLOW A.I.
      <br />
      ACCESS GALLERY
    </p>
  </div>
</div>
</div>

<div className="absolute bottom-[25%] left-8 md:bottom-8">
  <Link href="/">
    <SideButton direction="left">
      Back
    </SideButton>
  </Link>
</div>
<input
  ref={fileInputRef}
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
  className="hidden"
/>
    </main>
  );
}