"use client";

import { useEffect, useState } from "react";

import Header from "@/components/header";
import SideButton from "@/components/sideButtons";
import Link from "next/link";

export default function SummaryPage() {
  const [analysisData, setAnalysisData] = useState(null);
  const [activeCategory, setActiveCategory] = useState("race");
  const [selectedItem, setSelectedItem] = useState(null);

useEffect(() => {
  const storedData = localStorage.getItem("analysisData");

  if (storedData) {
    setAnalysisData(JSON.parse(storedData));
  }
}, []);

useEffect(() => {
  if (sortedData.length > 0) {
    setSelectedItem(sortedData[0]);
  }
}, [activeCategory, analysisData]);

const topRace = analysisData
  ? Object.entries(analysisData.race).sort((a, b) => b[1] - a[1])[0]
  : null;

  const topAge = analysisData
  ? Object.entries(analysisData.age).sort((a, b) => b[1] - a[1])[0]
  : null;

  const topGender = analysisData
  ? Object.entries(analysisData.gender).sort((a, b) => b[1] - a[1])[0]
  : null;

  const activeData = analysisData
  ? analysisData[activeCategory]
  : null;

  const sortedData = activeData
  ? Object.entries(activeData).sort((a, b) => b[1] - a[1])
  : [];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
   

      <div className="absolute left-10 top-24">
        <p className="text-[16px] font-semibold uppercase">
          A.I. Analysis
        </p>

        <h1 className="mt-2 text-[40px] font-normal uppercase leading-none">
          Demographics
        </h1>

        <p className="mt-2 text-[12px] uppercase">
          Predicted Race & Age
        </p>
      </div>
      <div className="mt-[245px] flex flex-col gap-3 px-10 pb-[160px] md:absolute md:left-10 md:right-10 md:top-[245px] md:bottom-[90px] md:mt-0 md:flex-row md:px-0 md:pb-0">
  {/* LEFT SELECTOR */}
  <div className="w-full md:w-[175px]">
    <div className={`border-t border-[#1A1B1C] p-4 cursor-pointer ${
  activeCategory === "race"
    ? "bg-[#1A1B1C] text-white"
    : "bg-[#E8E8E8] text-[#1A1B1C]"
}`}
    onClick={() => setActiveCategory("race")}>
      <p className="text-[12px] font-semibold uppercase">{topRace ? topRace[0].replaceAll("_", " ").toUpperCase() : ""}</p>
      <p className="mt-8 text-[12px] font-semibold uppercase">Race</p>
    </div>

    <div className={`mt-2 border-t border-[#1A1B1C] p-4 cursor-pointer ${
  activeCategory === "age"
    ? "bg-[#1A1B1C] text-white"
    : "bg-[#E8E8E8] text-[#1A1B1C]"
}`}
    onClick={() => setActiveCategory("age")}>
      <p className="text-[12px] font-semibold">{topAge ? topAge[0] : ""}</p>
      <p className="mt-8 text-[12px] font-semibold uppercase">Age</p>
    </div>

    <div className={`mt-2 border-t border-[#1A1B1C] p-4 cursor-pointer ${
  activeCategory === "gender"
    ? "bg-[#1A1B1C] text-white"
    : "bg-[#F1F1F1] text-[#1A1B1C]"
}`}
    onClick={() => setActiveCategory("gender")}>
      <p className="text-[12px] font-semibold uppercase">{topGender ? topGender[0].toUpperCase() : ""}</p>
      <p className="mt-8 text-[12px] font-semibold uppercase">Sex</p>
    </div>
  </div>

  {/* CENTER */}
  <div className="relative flex-1 border-t border-[#1A1B1C] bg-[#F5F5F5] p-4">
    <h2 className="text-[28px] font-normal">{selectedItem
  ? selectedItem[0].replaceAll("_", " ").toUpperCase()
  : ""}</h2>

   <div
  className="mx-auto mt-8 flex h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] items-center justify-center rounded-full lg:absolute 
  lg:bottom-8 lg:right-8 lg:mt-0"
  style={{
  "--progress": `${selectedItem ? selectedItem[1] * 360 : 0}deg`,
  background: `conic-gradient(
    #1A1B1C var(--progress),
    #D9D9D9 0deg
  )`,
  transition: "--progress 700ms ease-in-out",
}}
>
  <div className="flex h-[250px] w-[250px] sm:h-[290px] sm:w-[290px] items-center justify-center rounded-full bg-[#F3F3F3]">
    <p className="text-[40px] font-light">
      {selectedItem
        ? `${(selectedItem[1] * 100).toFixed(0)}%`
        : ""}
    </p>
  </div>
</div>
  </div>

  {/* RIGHT CONFIDENCE */}
  <div className="w-full md:w-[375px] border-t border-[#1A1B1C] bg-[#F5F5F5]">
    <div className="flex justify-between p-4 text-[12px] uppercase">
      <span>{activeCategory === "gender"
  ? "SEX"
  : activeCategory.toUpperCase()}</span>
      <span>A.I. Confidence</span>
    </div>

    <div className="px-4 py-2 text-[12px]">
      {sortedData.map(([label, score]) => (
  <div
  key={label}
  onClick={() => setSelectedItem([label, score])}
  className={`flex cursor-pointer items-center justify-between px-6 py-4 ${
    selectedItem?.[0] === label
      ? "bg-[#1A1B1C] text-white"
      : ""
  }`}
>
  <span>
    ◇ {label.replaceAll("_", " ")}
  </span>

  <span>
    {(score * 100).toFixed(0)}%
  </span>
</div>
))}
    </div>
  </div>
</div>
<p className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-[12px] text-[#A0A4AB]">
  If A.I. estimate is wrong, select the correct one.
</p>
   <div className="fixed bottom-[80px] left-0 right-0 z-20 flex items-center justify-between bg-white px-8 py-4 md:contents">

  <div className="md:absolute md:bottom-8 md:left-8">
    <Link href="/select">
      <SideButton direction="left">Back</SideButton>
    </Link>
  </div>

  <Link href="/">
    <div className="md:absolute md:bottom-8 md:right-8">
      <SideButton direction="right">
        Home
      </SideButton>
    </div>
  </Link>

</div>
      

    </main>
  );
}