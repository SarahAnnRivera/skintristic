"use client";

import { useEffect, useRef } from "react";
import { submitPhaseTwo } from "@/lib/api";
import Header from "@/components/header";
import Link from "next/link";
import SideButton from "@/components/sideButtons";

export default function CapturePage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
 

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("CAMERA ERROR:", error);
      }
    };

    startCamera();
  }, []);

   const capturePhoto = async () => {
  const video = videoRef.current;
  const canvas = canvasRef.current;

  if (!video || !canvas) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const image = canvas.toDataURL("image/jpeg");

  try {
  const data = await submitPhaseTwo(image);
  localStorage.setItem(
  "analysisData",
  JSON.stringify(data.data)
);
  console.log("CAMERA PHASE TWO RESPONSE:", data);
} catch (error) {
  console.error("CAMERA PHASE TWO ERROR:", error);
}
};

  return (
    <main className="relative min-h-screen overflow-hidden">
        <Header />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute left-0 top-[64px] h-[calc(100vh-64px)] w-full object-cover"
      />
      <div className="absolute bottom-[17%] left-1/2 z-10 -translate-x-1/2 text-center text-white">
  <p className="mb-4 text-[14px] font-medium uppercase">
    To get better results make sure to have
  </p>

  <div className="flex items-center justify-center gap-8 whitespace-nowrap text-[12px] uppercase">
    <span>◇ Neutral Expression</span>
    <span>◇ Frontal Pose</span>
    <span>◇ Adequate Lighting</span>
  </div>
</div>
      <canvas ref={canvasRef} className="hidden" />

<button
  onClick={capturePhoto}
  className="absolute right-8 top-1/2 z-20 flex -translate-y-1/2 items-center gap-5 text-white"
>
  <span className="text-[14px] font-medium uppercase">
  Take Picture
</span>

<div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white">
  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-white">
    📷
  </div>
</div>
</button>
<div className="absolute bottom-8 left-8 z-20 text-white">
  <Link href="/result">
    <SideButton direction="left">
      Back
    </SideButton>
  </Link>
</div>
    </main>
  );
}