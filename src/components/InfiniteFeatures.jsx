"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { VscWorkspaceTrusted } from "react-icons/vsc";
// ... other imports

export function InfiniteFeatures() {
  const features = [
    {
      icon: <VscWorkspaceTrusted />,
      quote: "All buddies are verified and background checked and trained",
      name: "Trusted Buddies",
      title: "Safety First"
    },
    // ... add all features
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={features} direction="right" speed="slow" />
    </div>
  );
}