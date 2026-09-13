"use client";

import { useState } from "react";
import Header from "./header";
import Diamond from "./diamonds";
import SideButton from "./sideButtons";
import { submitPhaseOne } from "@/lib/api";

export default function Introduction() {
  const [step, setStep] = useState("name");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

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

    try {
  const data = await submitPhaseOne(name, location);
  console.log(data);
} catch (error) {
  setError(error.message);
}
  };

  return (
    <main className="relative h-screen overflow-hidden">
      <Header />

      <p className="absolute left-10 top-20 text-sm font-semibold uppercase">
        To Start Analysis
      </p>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Diamond className="absolute h-[420px] w-[420px] rotate-[8deg]" />
        <Diamond className="absolute h-[420px] w-[420px] rotate-[22deg]" />
        <Diamond className="h-[400px] w-[400px]" />
      </div>

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
            className="w-[620px] border-b border-[#1A1B1C] bg-transparent text-center text-[64px] font-light outline-none placeholder:text-[#A0A4AB]"
          />
        ) : (
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where are you from?"
            className="w-[620px] border-b border-[#1A1B1C] bg-transparent text-center text-[64px] font-light outline-none placeholder:text-[#A0A4AB]"
          />
        )}

        {error && (
          <p className="mt-4 text-sm text-red-500">
            {error}
          </p>
        )}
      </form>

      <div className="absolute bottom-8 left-8">
        <SideButton direction="left">
          Back
        </SideButton>
      </div>
    </main>
  );
}