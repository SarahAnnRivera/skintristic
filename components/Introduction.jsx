"use client";

import { useState } from "react";
import Header from "./header";
import Diamond from "./diamonds";
import SideButton from "./sideButtons";
import { submitPhaseOne } from "@/lib/api";
import Link from "next/link";

export default function Introduction() {
  const [step, setStep] = useState("name");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

  const isValidText = (value) => {
    return value.trim() !== "" && !/\d/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === "name") {
      if (!isValidText(name)) {
        setError("Please enter a valid name.");
        return;
      }

      setError("");
      setStep("location");
      return;
    }

    if (!isValidText(location)) {
      setError("Please enter a valid location.");
      return;
    }

   setError("");
setLoading(true);

try {
  const data = await submitPhaseOne(name, location);
  setSubmitted(true);
} catch (error) {
  setError(error.message);
} finally {
  setLoading(false);
}
  };

  return (
    <main className="relative h-screen overflow-hidden">
      <Header />

      <p className="absolute left-10 top-20 text-sm font-semibold uppercase">
        To Start Analysis
      </p>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="diamond-spin-outer absolute">
    <Diamond className="h-[300px] w-[300px] rotate-[8deg] md:h-[360px] md:w-[360px]" />
  </div>

  <div className="diamond-spin-middle absolute">
    <Diamond className="h-[300px] w-[300px] rotate-[22deg] md:h-[360px] md:w-[360px]" />
  </div>

  <div className="diamond-spin-inner">
    <Diamond className="h-[290px] w-[290px] md:h-[350px] md:w-[350px]" />
  </div>
</div>

      {loading ? (
  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
    <p className="text-[18px] font-light text-[#1A1B1C]">
      Processing submission
    </p>

    <p className="mt-3 flex justify-center gap-2 text-[18px] text-[#A0A4AB]">
  <span className="loading-dot">•</span>
  <span className="loading-dot">•</span>
  <span className="loading-dot">•</span>
</p>
  </div>
) : submitted ? (
  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
    <h2 className="text-[36px] font-light text-[#1A1B1C]">
      Thank you!
    </h2>

    <p className="mt-6 text-[20px] font-light text-[#4A5568]">
      Proceed for the next step
    </p>
  </div>
) : (
  <form
    onSubmit={handleSubmit}
    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <p className="mb-4 text-sm uppercase text-[#A0A4AB]">
      Click To Type
    </p>

    {step === "name" ? (
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Introduce Yourself"
        className="w-[340px] md:w-[620px] border-b border-[#1A1B1C] bg-transparent text-center text-[40px] md:text-[64px] font-light outline-none"
      />
    ) : (
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Where are you from?"
        className="w-[340px] md:w-[620px] border-b border-[#1A1B1C] bg-transparent text-center text-[40px] md:text-[64px] font-light outline-none"
      />
    )}

    {error && (
      <p className="mt-4 text-sm text-red-500">
        {error}
      </p>
    )}
  </form>
)}

      <div className="absolute bottom-[25%] left-8 md:bottom-8">
  <Link href="/">
    <SideButton direction="left">
      Back
    </SideButton>
  </Link>
</div>
      {submitted && (
  <div className="absolute bottom-[25%] right-8 md:bottom-8">
    <Link href="/result">
    <SideButton direction="right">
      Proceed
    </SideButton>
    </Link>
  </div>
)}
    </main>
  );
}